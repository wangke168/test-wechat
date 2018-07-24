<?php
/**
 * Created by PhpStorm.
 * User: thinpig
 * Date: 2018/7/24
 * Time: 14:39
 */
namespace App\WeChat;

use DB;
use EasyWeChat\Kernel\Messages\Text;
class Response
{
    public function news($message, $keyword)
    {

//        $userService = $this->app->user;
        $openid = $message['FromUserName'];

        if ($keyword == 'a') {
            $content = new Text();
            if ($this->usage->get_openid_info($openid)->eventkey) {
                $content->content = $this->usage->get_openid_info($openid)->eventkey;
            } else {
                $content->content = '无eventkey';
            }
        } elseif ($keyword == 'wxh') {
//            $content = new Text($openid);
//            $content->content = $openid;
            $content = new Text();
            $content->setAttribute('content', '您好！overtrue。');
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
//            $content->content = $this->get_weather_info();
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