<?php
/**
 * Created by PhpStorm.
 * User: thinpig
 * Date: 2018/7/24
 * Time: 14:39
 */
namespace App\WeChat;

use App\Models\WechatArticle;
use DB;
use EasyWeChat\Kernel\Messages\Text;
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

//        $userService = $this->app->user;
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
/*        elseif ($keyword == '预约') {
            $content = new Text();
            $content->content = $this->query_wite_info($openid);
        } elseif ($keyword == 'hx') {
            $content = new Text();
            $tour = new Tour();
            $content->content = $tour->verification_subscribe($openid, '1');
        } */
        elseif (strstr($keyword, '天气')) {
            $content = new Text($this->get_weather_info());
        }
/*        elseif (str_contains($keyword, '取消') || str_contains($keyword, '退款') || str_contains($keyword, '退订') || str_contains($keyword, '订单')) {
            // 转发收到的消息给客服
            $online_staff = $this->staff->onlines();
            if (empty($online_staff['kf_online_list'])) {
                $content = $this->request_keyword($openid, $keyword);
            } else {
                return new \EasyWeChat\Message\Transfer();
            }*/

            /*$transfer = new \EasyWeChat\Message\Transfer();
            $transfer->account('kf2001@u_hengdian');// 或者 $transfer->to($account);

            return $transfer;*/
//        }
        else {
            $content = $this->request_keyword($openid, $keyword);
        }

        return $content;
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