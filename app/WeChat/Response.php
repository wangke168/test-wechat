<?php
/**
 * Created by PhpStorm.
 * User: thinpig
 * Date: 2018/7/24
 * Time: 14:39
 */
namespace App\WeChat;

use App\Models\WechatArticle;
use App\Models\WechatTxt;
use App\Models\WechatVoice;
use App\Models\WechatImage;
use DB;
use EasyWeChat\Kernel\Messages\Text;
use EasyWeChat\Kernel\Messages\Image;
use EasyWeChat\Kernel\Messages\Voice;
use EasyWeChat\Kernel\Messages\News;
use EasyWeChat\Kernel\Messages\NewsItem;
class Response
{
    public $app;
    public $usage;
    public $openid;
    public $server;
    public $staff;

    public function __construct()
    {
        $this->app = app('wechat.official_account');

        $this->usage = new Usage();

    }
    public function news($message, $keyword)
    {

        $openid = $message['FromUserName'];

        if ($keyword == 'a') {
//            $content = new Text();
            if ($this->usage->get_openid_info($openid)->eventkey) {
                $result = $this->usage->get_openid_info($openid)->eventkey;
            } else {
                $result = '无eventkey';
            }
            $content = new Text($result);
        } elseif ($keyword == 'wxh') {
            $content = new Text($openid);
        }
        elseif (strstr($keyword, '天气')) {
            $content = new Text($this->get_weather_info());
        }
        else {
            $content = $this->request_keyword($openid, $keyword);
        }
        return $content;
    }

    /**
     * 关键字回复
     * @param $openid
     * @param $keyword
     * @return array|Text
     */
    private function request_keyword($openid, $keyword)
    {
        $eventkey = $this->usage->get_openid_info($openid)->eventkey;
        if (!$eventkey) {
            $eventkey = 'all';
        }
//        $content = $this->request_news($openid, $eventkey, '3', $keyword, '');

        $flag = false; //先设置flag，如果news，txt，voice都没有的话，检查flag值，还是false时，输出默认关注显示
        //检查该关键字回复中是否有图文消息
        if ($this->check_keyword_message($eventkey, "news", $keyword)) {
            $flag = true;
            $this->request_news($openid, $eventkey, '3', $keyword, '');
//            $this->app->staff->message($content_news)->by('1001@u_hengdian')->to($openid)->send();
        }
        if ($this->check_keyword_message($eventkey, "voice", $keyword)) {
            $flag = true;
            $this->request_voice($openid, '2', $eventkey, $keyword);
        }
        if ($this->check_keyword_message($eventkey, "txt", $keyword)) {
            $flag = true;
            $this->request_txt($openid, '2', $eventkey, $keyword); //直接在查询文本回复时使用客服接口
        }
        if ($this->check_keyword_message($eventkey, "image", $keyword)) {
            $flag = true;
            $this->request_image($openid, '2', $eventkey, $keyword); //直接在查询文本回复时使用客服接口
        }
        if (!$flag) //如果该二维码没有对应的关注推送信息
        {
            $content = new Text( "嘟......您的留言已经进入自动留声机，小横横回来后会努力回复你的~\n您也可以拨打0579-89600055立刻接通小横横。");
//            $content->content = "嘟......您的留言已经进入自动留声机，小横横回来后会努力回复你的~\n您也可以拨打0579-89600055立刻接通小横横。";
//            $this->app->staff->message($content)->by('1001@u_hengdian')->to($openid)->send();
            $this->app->customer_service->message($content)->to($openid)->send();
//            }
        }


//        return $content;
    }


    /**
     * @param $openid
     * @param $type 1:关注    2：关键字
     * @param $eventkey
     * @param $keyword
     */

    private function request_txt($openid, $type, $eventkey, $keyword)
    {
//        $app = app('wechat');
        switch ($type) {
            case 1:
                $row = WechatTxt::focusPublished($eventkey)
                    ->orderBy('id', 'desc')
                    ->get();
                break;
            case 2:
                $keyword = $this->check_keywowrd($keyword);
                $row = WechatTxt::whereRaw('FIND_IN_SET("' . $keyword . '", keyword)')
                    ->usagePublished($eventkey)
                    ->orderBy('id', 'desc')
                    ->get();
                break;
        }
        foreach ($row as $result) {
            $content = new Text($result->content);
            $this->app->customer_service->message($content)->to($openid)->send();
        }
    }

    /*
* 检查关键字中是否包含可回复字符
* @param    string       $text        客人输入关键字
* @return   string       $result      到数据库查（WX_Request_Keyword）询输出关键字
*/
    private function check_keywowrd($text)
    {
        $flag = "不包含";
        $row = DB::table('wx_request_keyword')
            ->orderBy('id', 'asc')->get();

        foreach ($row as $result) {
            if (@strstr($text, $result->keyword) != '') {
                $flag = $result->keyword;
                break;
            }
        }
        return $flag;
    }


    /**
     * 检查关注是否有对应二维码的消息回复（图文、语音、文字、图片）
     * @param $eventkey
     * @param $type ：   news:图文    txt:文字      voice:语音     image:图片
     * @param $focus :   1:关注    0：不关注
     * @return boolkey
     */
    private function check_eventkey_message($eventkey, $type, $focus)
    {
//        $db = new DB();
        $flag = false;
        switch ($type) {
            case "news":
                $row_news = WechatArticle::focusPublished($eventkey)->first();

                if ($row_news) {
                    $flag = true;
                }
                break;
            case "txt":
                $row_txt = WechatTxt::focusPublished($eventkey)->first();

                if ($row_txt) {
                    $flag = true;
                }
                break;
            case "voice":
                $row_voice = WechatVoice::focusPublished($eventkey)->first();

                if ($row_voice) {
                    $flag = true;
                }
                break;
            case "image":
                $row_images = WechatImage:: focusPublished($eventkey)->first();

                if ($row_images) {
                    $flag = true;
                }
                break;
            default:
                break;

        }
        return $flag;
    }


    /**
     * 检查关键字是否有对应的消息回复（图文、语音、文字、图片）
     * @param $eventkey
     * @param $type ：   news:图文    txt:文字      voice:语音
     * @return boolkey
     */
    private function check_keyword_message($eventkey, $type, $keyword)
    {
//        $db = new DB();
        $keyword = $this->check_keywowrd($keyword);
        $flag = false;
        switch ($type) {
            case "news":
                $row_news = WechatArticle::whereRaw('FIND_IN_SET("' . $keyword . '", keyword)')
                    ->usagePublished($eventkey)
                    ->first();

                if ($row_news) {
                    $flag = true;
                }
                break;
            case "txt":
                $row_txt = WechatTxt::whereRaw('FIND_IN_SET("' . $keyword . '", keyword)')
                    ->usagePublished($eventkey)
                    ->first();

                if ($row_txt) {
                    $flag = true;
                }
                break;
            case "voice":
                $row_voice = WechatVoice::whereRaw('FIND_IN_SET("' . $keyword . '", keyword)')
                    ->usagePublished($eventkey)
                    ->first();

                if ($row_voice) {
                    $flag = true;
                }
                break;
            case "image":
                $row_images = WechatImage::whereRaw('FIND_IN_SET("' . $keyword . '", keyword)')
                    ->usagePublished($eventkey)
                    ->first();
                if ($row_images) {
                    $flag = true;
                }
                break;
            default:
                break;

        }
        return $flag;
    }

    /*
    * 回复Voice
    *$focus:1（关注）；2（关键字）
    */
    public function request_voice($openid, $type, $eventkey, $keyword)
    {
        switch ($type) {
            case '1':
                $row = WechatVoice::focusPublished($eventkey)
                    ->orderBy('id', 'desc')
                    ->get();

                break;
            case "2":
                $keyword = $this->check_keywowrd($keyword);
                $row = WechatVoice::whereRaw('FIND_IN_SET("' . $keyword . '", keyword)')
                    ->usagePublished($eventkey)
                    ->orderBy('id', 'desc')
                    ->get();
                break;
        }
        foreach ($row as $result) {
            $voice = new Voice($result->media_id);
            $this->app->customer_service->message($voice)->to($openid)->send();
        }
    }

    /*
   * 回复Image
   *$focus:1（关注）；2（关键字）
   */
    public function request_image($openid, $type, $eventkey, $keyword)
    {
        switch ($type) {
            case '1':
                $row = WechatImage::focusPublished($eventkey)
                    ->orderBy('id', 'desc')
                    ->get();

                break;
            case "2":
                $keyword = $this->check_keywowrd($keyword);

                $row = WechatImage::whereRaw('FIND_IN_SET("' . $keyword . '", keyword)')
                    ->usagePublished($eventkey)
                    ->orderBy('id', 'desc')
                    ->get();
                break;
        }
        foreach ($row as $result) {
            $image = new Image($result->media_id);
//            $image->media_id = $result->media_id;
//            $this->app->staff->message($image)->by('1001@u_hengdian')->to($openid)->send();
            $this->app->customer_service->message($content)->to($openid)->send();
        }
    }




    /**
     * 推送图文
     * @param $openid
     * @param $eventkey
     * @param $type 1：关注    2：菜单    3：关键字
     * @param $keyword      关键字
     * @param $menuid       菜单ID
     */

//$this->request_news($openid, 'all', '1', '', '');
    public function request_news($openid, $eventkey, $type, $keyword, $menuid)
    {
//        $wxnumber = Crypt::encrypt($openid);      //由于龙帝惊临预约要解密，采用另外的函数
        $wxnumber = $this->usage->authcode($openid, 'ENCODE', 0);
//        $uid = $this->usage->get_uid($openid);
        if (!$eventkey) {
            $eventkey = 'all';
        }
        switch ($type) {
            case 1:
                $row = WechatArticle::focusPublished($eventkey)
                    ->skip(0)->take(8)->get();
                break;
            case 2:
                $row = WechatArticle::where('classid', $menuid)
                    ->usagePublished($eventkey)
                    ->skip(0)->take(8)->get();
                break;
            case 3:
                $keyword = $this->check_keywowrd($keyword);
                $row = WechatArticle::whereRaw('FIND_IN_SET("' . $keyword . '", keyword)')
                    ->usagePublished($eventkey)
                    ->skip(0)->take(8)->get();
                break;
        }
        if ($row) {
            $content = array();
            foreach ($row as $result) {
                $url = $result->url;
                $id = $result->id;
                /*如果只直接跳转链接页面时，判断是否已经带参数*/
                if ($url != '') {
                    /*链接跳转的数据统计*/
                    $url = "https://" . $_SERVER['HTTP_HOST'] . "/jump/{$id}/{$openid}";

                } else {
                    $url = "https://" . $_SERVER['HTTP_HOST'] . "/article/detail?id=" . $id . "&wxnumber=" . $wxnumber;
                }

                $pic_url = "https://wx-control.hdyuanmingxinyuan.com/" . $result->picurl;

                /*索引图检查结束*/
/*                $new = new News();
                $new->title = $result->title;
                $new->description = $result->description;
                $new->url = $url;
                $new->image = $pic_url;
                $content[] = $new;*/

                $items =new NewsItem([
                        'title'       => $result->title,
                        'description' => $result->description,
                        'url'         => $url,
                        'image'       => $pic_url,
                        // ...
                    ]);
                $content[] = $items;
            }
            $news = new News($content);
//            $this->app->staff->message($content)->by('1001@u_hengdian')->to($openid)->send();
            $this->app->customer_service->message($news)->to($openid)->send();
        }

    }




    /**
     * 菜单回复
     * @param $openid
     * @param $menuID
     * @return array|Text
     */
    public function click_request($openid, $menuid)
    {
        $eventkey = $this->usage->get_openid_info($openid)->eventkey;
        $this->request_news($openid, $eventkey, '2', '', $menuid);
        $this->add_menu_click_hit($openid, $menuid); //增加点击数统计
//        return $content;
    }


    /**
     * 增加菜单点击数
     * @param $openid
     * @param $menuID
     */

    private function add_menu_click_hit($openid, $menuID)
    {
        DB::table('wx_click_hits')
            ->insert(['wx_openid' => $openid, 'click' => $menuID]);
    }


    /**
     * 获取天气情况
     * @return string
     */
    private function get_weather_info()
    {
        $json = file_get_contents("http://api.map.baidu.com/telematics/v3/weather?location=%E4%B8%9C%E9%98%B3&output=json&ak=2c87d6d0443ab161753291258ac8ab7a");
        $data = json_decode($json, true);
        $contentStr = "【横店天气预报】：\n\n";
        $contentStr = $contentStr . $data['results'][0]['weather_data'][0]['date'] . "\n";
        $contentStr = $contentStr . "天气情况：" . $data['results'][0]['weather_data'][0]['weather'] . "\n";
        $contentStr = $contentStr . "气温：" . $data['results'][0]['weather_data'][0]['temperature'] . "\n\n";
        $contentStr = $contentStr . "明天：" . $data['results'][0]['weather_data'][1]['date'] . "\n";
        $contentStr = $contentStr . "天气情况：" . $data['results'][0]['weather_data'][1]['weather'] . "\n";
        $contentStr = $contentStr . "气温：" . $data['results'][0]['weather_data'][1]['temperature'] . "\n\n";
        $contentStr = $contentStr . "后天：" . $data['results'][0]['weather_data'][2]['date'] . "\n";
        $contentStr = $contentStr . "天气情况：" . $data['results'][0]['weather_data'][2]['weather'] . "\n";
        $contentStr = $contentStr . "气温：" . $data['results'][0]['weather_data'][2]['temperature'] . "\n\n";
        $contentStr = $contentStr . "如受恶劣天气影响，部分景区节目、游乐设施可能推迟或暂停开放，具体以景区公示为准。\n";
        return $contentStr;
    }
}