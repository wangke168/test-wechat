<?php

namespace App\Http\Controllers;
use DB;
use Carbon\Carbon;
use Illuminate\Http\Request;
use EasyWeChat\Factory;
use EasyWeChat\Kernel\Messages\Text;
use App\Models\WechatArticle;
use EasyWeChat\Kernel\Messages\News;
use EasyWeChat\Kernel\Messages\NewsItem;
use App\WeChat\Count;
class TestController extends Controller
{
    public $weObj;
    public $config;
    public $templateId;
    public function __construct()
    {
        $this->weObj = app('wechat.official_account');
        $this->templateId=env('TEST_TEMPLATEID_TICKET');
    }

    public function response_test1()
    {
        $url = env('ORDER_URL', '');
//        $json = file_get_contents("http://ydpt.hdymxy.com/searchorder_json.aspx?sellid=" . $sellid);
        $json = file_get_contents($url . "searchorder_json.aspx?sellid=V1808040075");

        $openid='o5--l1Pl9YZWPj9n342XbdpJdG8w';
        $data = json_decode($json, true);

        $ticketcount = count($data['ticketorder']);
        $i = 0;
        if ($ticketcount <> 0) {
            $ticket_id = 1;

            $name = $data['ticketorder'][0]['name'];
            $first = $data['ticketorder'][0]['name'] . "，您好，您已经成功预订门票。\n";
            $sellid = $data['ticketorder'][0]['sellid'];
            $date = $data['ticketorder'][0]['date2'];
            $ticket = $data['ticketorder'][0]['ticket'];
            $numbers = $data['ticketorder'][0]['numbers'];

            $flag = $data['ticketorder'][0]['flag'];

            if ($flag != "未支付" || $flag != "已取消") {

                if ($data['ticketorder'][0]['ticket'] == '2018年8点年卡票' || $data['ticketorder'][0]['ticket'] == '2018年两馆年卡票' || $data['ticketorder'][0]['ticket'] == '2018年秋冬苑年卡票' || $data['ticketorder'][0]['ticket'] == '2018年春苑年卡票' || $data['ticketorder'][0]['ticket'] == '2018年夏苑年卡票') {
                    $ticketorder = "注意：年卡预订成功三天后开始生效";
                    $remark = "\n在检票口出示本人身份证可直接进入景区。\n如有疑问，请致电0579-89600055。";
                } else {
                    $ticketorder = $data['ticketorder'][0]['code'];
                    $remark = "\n在检票口出示此识别码可直接进入景区。\n如有疑问，请致电0579-89600055。";
                }


                $templateId = env('TEST_TEMPLATEID_TICKET');

//                $data = array(
//                    "first" => array($first, "#000000"),
//                    "keyword1" => array($sellid, "#173177"),
//                    "keyword2" => array($date, "#173177"),
//                    "keyword3" => array($ticket, "#173177"),
//                    "keyword4" => array($numbers, "#173177"),
//                    "keyword5" => array($ticketorder, "#173177"),
//                    "remark" => array($remark, "#000000"),
//                );
                $date=[
                    "first" => [$first, "#000000"],
                    "keyword1" => [$sellid, "#173177"],
                    "keyword2" => [$date, "#173177"],
                    "keyword3" => [$ticket, "#173177"],
                    "keyword4" => [$numbers, "#173177"],
                    "keyword5" => [$ticketorder, "#173177"],
                    "remark" => [$remark, "#000000"],
                ];

//                $content = $second->second_info_send('ticket', $ticket, $openid, $sellid);

            }
        }
        /*$date=[
            "first" => ['first1', "#000000"],
            "keyword1" => ['sellid', "#173177"],
            "keyword2" => ['date', "#173177"],
            "keyword3" => ['days', "#173177"],
            "keyword4" => ['roomtype', "#173177"],
            "keyword5" => ['numbers', "#173177"],
            "remark" => ['remark', "#000000"],
        ];*/

        $this->weObj->template_message->send([
            'touser' => $openid,
            'template_id' => $this->templateId,
            'url' => 'http://www.baidu.com',
            'data' => $date,
        ]);

    }
    private function time_check($id, $openid)
    {
        $past_time = Carbon::now()->subSeconds(30);
        $row = DB::table('wx_article_hits')
            ->where('article_id', $id)
            ->where('wx_openid', $openid)
            ->where('adddate', '>', $past_time)
            ->orderBy('id', 'desc')
            ->get();
        if (!$row) {
            return true;
        } else {
            return false;
        }
    }

    public function response_test()
    {
        $row = WechatArticle::where('classid', '7')
            ->usagePublished('all')
            ->skip(0)->take(8)->get();

        if ($row) {
            $content = array();
            foreach ($row as $result) {
                $url = $result->url;
                $id = $result->id;
                /*如果只直接跳转链接页面时，判断是否已经带参数*/
                if ($url != '') {
                    /*链接跳转的数据统计*/
                    $url = "https://" . $_SERVER['HTTP_HOST'] . "/jump/{$id}";

                } else {
                    $url = "https://" . $_SERVER['HTTP_HOST'] . "/article/detail?id=" . $id . "&wxnumber=";
                }

                $pic_url = "https://wx-control.hdyuanmingxinyuan.com/" . $result->picurl;

                $items = new NewsItem([
                    'title' => $result->title,
                    'description' => $result->description,
                    'url' => $url,
                    'image' => $pic_url,
                ]);

                $content[] = $items;
            }
            $news = new News($content);
        }
        var_dump($news);
    }


    public function index()
    {
        $message = new Text('FromUserName');
        $row = WechatArticle::where('classid', '7')
            ->usagePublished('all')
            ->skip(0)->take(8)->get();

        if ($row) {
            $content = array();
            foreach ($row as $result) {
                $url = $result->url;
                $id = $result->id;
                /*如果只直接跳转链接页面时，判断是否已经带参数*/
                if ($url != '') {
                    /*链接跳转的数据统计*/
                    $url = "https://" . $_SERVER['HTTP_HOST'] . "/jump/{$id}";

                } else {
                    $url = "https://" . $_SERVER['HTTP_HOST'] . "/article/detail?id=" . $id . "&wxnumber=";
                }

                $pic_url = "https://wx-control.hdyuanmingxinyuan.com/" . $result->picurl;

                $items = new NewsItem([
                    'title' => $result->title,
                    'description' => $result->description,
                    'url' => $url,
                    'image' => $pic_url,
                ]);

                $content[] = $items;
            }
            $news = new News($content);
        }
        $result = $this->weObj->customer_service->message($news)->to('o5--l1Pl9YZWPj9n342XbdpJdG8w')->send();

    }

    public function test()
    {
        $row = \DB::table('wx_recevice_txt')
            ->insert(['wx_openid' => 'dasdasdsa', 'content' => 'sadas']);
        var_dump($row);
    }
}
