<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\WeChat\Usage;
use DB;
use Carbon\Carbon;
use App\WeChat\Order;

class OrderController extends Controller
{
    //
    public $app;
    public $notice;

//    public $usage;

    public function __construct()
    {
        $this->app = app('wechat.official_account');
    }

    public function send($sellid, $openid)
    {
        if ($this->check_order($sellid)) {
            $this->insert_order($openid, $sellid);
            $this->PostOrderInfo($openid, $sellid);
        }
    }

    private function check_qy($sellid, $openid = null)
    {
        if ($openid) {
            $usage = new Usage();
            $uid = $usage->get_uid($openid);
            @$eventkey = '';
            if ($usage->get_openid_info($openid)) {
                $eventkey = $usage->get_openid_info($openid)->eventkey;     //获取客人所属市场
            }
            if ($eventkey) {
                $row = DB::table('qyh_user_info')
                    ->where('eventkey', $eventkey)
                    ->first();
                if ($row) {
                    $this->post_tglm($sellid, $row->userid, $uid);
                }

            }
        }
    }


    private function post_tglm($sellid, $useid, $uid)
    {
        //初始化
        $curl = curl_init();
        //设置抓取的url
        curl_setopt($curl, CURLOPT_URL, 'https://weix.hengdianworld.com/sendmessage/tglm');
        //设置头文件的信息作为数据流输出
        curl_setopt($curl, CURLOPT_HEADER, 1);
        //设置获取的信息以文件流的形式返回，而不是直接输出。
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        //设置post方式提交
        curl_setopt($curl, CURLOPT_POST, 1);
        //设置post数据
        $post_data = array(
            "sellid" => $sellid,
            "userid" => $useid,
            "uid" => $uid
        );
        curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
        //执行命令
        curl_exec($curl);
        //关闭URL请求
        curl_close($curl);
    }

    public function confrim($sellid, $openid = null)
    {
//        $this->dispatch(new ConfrimOrderQueue($sellid,$openid));
        if ($this->check_order_confrim($sellid)) {
            $usage = new Usage();
            $order = new Order();

            $eventkey = '';
            $focusdate = '';

            $openId = $usage->authcode($openid, 'DECODE', 0);
            if ($usage->get_openid_info($openId)) {
                $eventkey = $usage->get_openid_info($openId)->eventkey;     //获取客人所属市场
                $focusdate = $usage->get_openid_info($openId)->adddate;     //获取客人关注时间
            }

            $name = $order->get_order_detail($sellid)['name'];            //获取客人姓名
            $phone = $order->get_order_detail($sellid)['phone'];          //获取客人电话
            $arrive_date = $order->get_order_detail($sellid)['date'];     //获取客人预达日期
            $adddate = $order->get_order_detail($sellid)['addtime'];     //获取客人预订时间
            $numbers = $order->get_order_detail($sellid)['numbers'];
            // $city = $usage->MobileQueryAttribution($phone)->city;               //根据手机号获取归属地

            DB::table('wx_order_confirm')
                ->insert(['wx_openid' => $openId, 'sellid' => $sellid, 'order_name' => $name, 'tel' => $phone,
                    'arrive_date' => $arrive_date, 'eventkey' => $eventkey, 'adddate' => $adddate,
                    'focusdate' => $focusdate, 'numbers' => $numbers]);
        }
    }

    /**
     * 检查提交订单表中是否已经存在订单号
     * @param $sellid
     * @return bool
     */
    private function check_order_confrim($sellid)
    {
        $row = DB::table('wx_order_confirm')
            ->where('sellid', $sellid)
            ->count();

        if ($row == 0) {
            $flag = true;
        } else {
            $flag = false;
        }
        return $flag;
    }

    /**
     * 检查预订成功表里是否已经存在改订单号
     * @param $sellid
     * @return bool
     */
    private function check_order($sellid)
    {
        $row = DB::table('wx_order_send')
            ->where('sellid', $sellid)
            ->count();

        if ($row == 0) {
            $flag = true;
        } else {
            $flag = false;
        }
        return $flag;
    }

    private function insert_order($openid, $sellid)
    {
        $usage = new Usage();
        $eventkey = '';
        $focusdate = '0000-00-00 00:00:00';
        if ($usage->get_openid_info($openid)) {
            $eventkey = $usage->get_openid_info($openid)->eventkey;
            $focusdate = $usage->get_openid_info($openid)->adddate;
        }
        DB::table('wx_order_send')
            ->insert(['wx_openid' => $openid, 'sellid' => $sellid, 'eventkey' => $eventkey, 'focusdate' => $focusdate]);
    }

    private function PostOrderInfo($openid, $sellid)
    {
        $usage = new Usage();
        $eventkey = '';

        if ($usage->get_openid_info($openid)) {
            $eventkey = $usage->get_openid_info($openid)->eventkey;
        }

        $ticket_id = "";
        $hotel = "";
        $ticket = "";
        $url = env('ORDER_URL', '');
        $json = file_get_contents($url . "searchorder_json.aspx?sellid=" . $sellid);
        $data = json_decode($json, true);

        $ticketcount = count($data['ticketorder']);

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

                $content = [
                    "first" => [$first, "#000000"],
                    "keyword1" => [$sellid, "#173177"],
                    "keyword2" => [$date, "#173177"],
                    "keyword3" => [$ticket, "#173177"],
                    "keyword4" => [$numbers, "#173177"],
                    "keyword5" => [$ticketorder, "#c30e0e"],
                    "remark" => [$remark, "#000000"],
                ];
            }
        }
        DB::table('wx_order_detail')
            ->insert(['sellid' => $sellid, 'wx_openid' => $openid, 'k_name' => $name,
                'arrivedate' => $date, 'ticket_id' => $ticket_id, 'ticket' => $ticket,
                'hotel' => $hotel, 'eventkey' => $eventkey, 'numbers' => $numbers, 'adddate' => Carbon::today()]);

        $this->app->template_message->send([
            'touser' => $openid,
            'template_id' => $templateId,
            'url' => 'https://wechat.hdyuanmingxinyuan.com/article/detail?id=1482',
            'data' => $content,
        ]);
    }
}
