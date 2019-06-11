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
use Intervention\Image\Facades\Image;
use App\WeChat\Zone;
class TestController extends Controller
{
    public $weObj;
    public $config;
    public $qrcode;
    public $templateId;
    public function __construct()
    {
        $this->weObj = app('wechat.official_account');
        $this->templateId=env('TEST_TEMPLATEID_TICKET');
    }


    public function create()
    {
        $result = $this->weObj->qrcode->forever(100);// 或者 $app->qrcode->forever("foo");
//        return $result['ticket'];
        $ticket = $result['ticket'];
        $url = $this->weObj->qrcode->url($ticket);
return $url;
        $content = file_get_contents($url);

        $id='101';
        $row=DB::table('wx_qrscene_info')
            ->where('qrscene_id',$id)
            ->first();
        $app = app('wechat');
        $qrcode = $this->weObj->qrcode;
        $result = $qrcode->forever($id);// 或者 $qrcode->forever("foo");
        $ticket = $result->ticket; // 或者 $result['ticket']
        if ($row->qrscene_logo) {
            $qr_logo = $row->qrscene_logo;
        }
        else{
            $qr_logo='qr/logo.png';
        }
        /* $QR = $qrcode->url($ticket);
         $logo = $qr_logo;
         $img = Image::make($QR);
         $img->insert($logo, 'center');
         return $img->response('png');*/
        return $this->create_qr($ticket,$qr_logo);
    }
    private function create_qr($ticket,$qr_logo)
    {
        $QR = $this->qrcode->url($ticket);
        $logo=$qr_logo;
        $img = Image::make($QR);
        $img->insert($logo, 'center');
        return $img->response('png');
    }




    public function tag(Request $request)
    {
        $type=$request->input('type');
        switch ($type){
            case 'tag_list':
                return $this->weObj->user_tag->list();
                break;
            case 'tag_add':
                return $this->weObj->user_tag->create('测试');
                break;
            case 'get':
                return $this->weObj->user_tag->usersOfTag('100', $nextOpenId = '');
                break;
            case 'add':
                $openIds = ['o5--l1Pl9YZWPj9n342XbdpJdG8w'];
                return $this->weObj->user_tag->tagUsers($openIds, '100');
                break;
            case 'del':
                $openIds = ['o5--l1Pl9YZWPj9n342XbdpJdG8w'];
                return $this->weObj->user_tag->untagUsers($openIds, '100');
                break;
            default:
                return 'sadasd';
                break;
        }
    }




    public function response_test1()
    {

        $shows = DB::table('zone_show_info')
            ->where('zone_id', '6')
            ->orderBy('priority', 'asc')
            ->get();
        if ($shows->first())
        {
            return '1';
        }
        else{
            return '2';
        }
        $date = Carbon::now()->toDateString();
        $zone = new \App\WeChat\Zone();
        $rows_zone = DB::table('zone')
            ->orderBy('priority', 'asc')
            ->get();
        foreach ($rows_zone as $row_zone) {


            $shows = DB::table('zone_show_info')
                ->where('zone_id', '6')
                ->orderBy('priority', 'asc')
                ->get();
            if($shows){
                echo '<tr><td class="zone">' . $row_zone->zone_name . '景区</td></tr>';
              /*  foreach ($shows as $show) {
                    //获取现在所处时间段
                    $rows_show = DB::table('zone_show_time')
                        ->whereDate('startdate', '<=', $date)
                        ->whereDate('enddate', '>=', $date)
                        ->where('zone_id', $row_zone->id)
                        ->where('show_id', $show->id)
                        ->get();
                    if ($rows_show) {

                        foreach ($rows_show as $row_show) {
                            if ($zone->get_correct_show($row_show->id, $row_show->show_id, $date)) {
                                $show_name = $zone->get_project_info($row_show->show_id)->show_name;
                                if ($row_show->se_name) {
                                    $show_name = $row_show->se_name . '(' . $show_name . ')';
                                }
                                echo '<tr><td class="showname">' . $show_name . '</td></tr>';
                                echo '<tr><td class="showtime">' . str_replace(',', ' | ', $row_show->show_time) . '</td></tr>';

                                if ($row_show->remark) {
                                    echo '<tr><td class="showdate">' . $row_show->remark . '</td></tr>';
                                }
                            }
                        }
                    }
                }*/
            }
        }
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
