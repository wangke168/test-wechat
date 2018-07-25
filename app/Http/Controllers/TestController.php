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
        $this->weObj = app('wechat.official_account');
    }

    public function response_test1()
    {
        $news1 =
            new NewsItem([
                'title' => 'title',
                'description' => '...',
                'url' => 'url',
                'image' => 'image',
            ]);
        $news2 =
            new NewsItem([
                'title' => 'title',
                'description' => '...',
                'url' => 'url',
                'image' => 'image',
            ]);
        $news = new News([$news1, $news2]);
        var_dump($news);
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
        $news1 =
            new NewsItem([
                'title' => 'title',
                'description' => '...',
                'url' => 'url',
                'image' => 'image',
            ]);
        $news2 =
            new NewsItem([
                'title' => 'title',
                'description' => '...',
                'url' => 'url',
                'image' => 'image',
            ]);
        $news = new News([$news1, $news2]);
        $result = $this->weObj->customer_service->message($news)->to('o5--l1Pl9YZWPj9n342XbdpJdG8w')->send();

    }

    public function test()
    {
        $row = \DB::table('wx_recevice_txt')
            ->insert(['wx_openid' => 'dasdasdsa', 'content' => 'sadas']);
        var_dump($row);
    }
}
