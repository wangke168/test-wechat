<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use EasyWeChat\Factory;
use EasyWeChat\Kernel\Messages\Text;
use App\Models\WechatArticle;
use EasyWeChat\Kernel\Messages\News;
use EasyWeChat\Kernel\Messages\NewsItem;
class TestController extends Controller
{
    public $weObj;
    public $config;
    public function __construct()
    {
        $this->weObj=app('wechat.official_account');
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
                    $url = "https://" . $_SERVER['HTTP_HOST'] . "/article/detail?id=" . $id . "&wxnumber=" ;
                }

                $pic_url = "https://wx-control.hdyuanmingxinyuan.com/" . $result->picurl;

                /*索引图检查结束*/
                /*                $new = new News();
                                $new->title = $result->title;
                                $new->description = $result->description;
                                $new->url = $url;
                                $new->image = $pic_url;
                                $content[] = $new;*/

                $items = new NewsItem([
                    'title' => $result->title,
                    'description' => $result->description,
                    'url' => $url,
                    'image' => $pic_url,
                    // ...
                ]);
                $content[] = $items;
            }
            $news = new News($content);
        }
        return($news);
    }


    public function index()
    {
        $message = new Text('FromUserName');
        $result = $this->weObj->customer_service->message($message)->to('o5--l1Pl9YZWPj9n342XbdpJdG8w')->send();

    }
    public function test()
    {
        $row=\DB::table('wx_recevice_txt')
            ->insert(['wx_openid' => 'dasdasdsa', 'content' => 'sadas']);
        var_dump($row);
    }
}
