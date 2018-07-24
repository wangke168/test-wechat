<?php

namespace App\Http\Controllers;

use App\WeChat\Response;
use Illuminate\Http\Request;
use Log;
use DB;
use EasyWeChat\Kernel\Messages\Text;
class WeChatController extends Controller
{
    /**
     * 处理微信的请求消息
     *
     * @return string
     */
    public function serve()
    {
//        Log::info('request arrived.'); # 注意：Log 为 Laravel 组件，所以它记的日志去 Laravel 日志看，而不是 EasyWeChat 日志

        $app = app('wechat.official_account');

        $app->server->push(function($message){
            $openid=$message['FromUserName'];
/*
            $text = new Text($message['FromUserName']);
            return $text;*/
            $response = new Response();
            switch ($message['MsgType']) {
                case 'event':
                    # 事件消息...
                    switch ($message->Event) {
                        case 'CLICK':
                            switch ($message->EventKey) {
                                case "13":
                                    $content = new Text();
                                    $content->content = "横店圆明新园官方客服电话" . "\n" . "0579-89600055";
                                    return $content;
                                default:
//                                    $response->click_request($openid, $message->EventKey);
                                    break;
                            }
                            break;
                       /* case 'subscribe':
                            #关注事件
                            $eventkey = $message->EventKey;
                            if (substr($eventkey, 0, 7) == 'qrscene') {
                                $eventkey = substr($eventkey, 8);
                            } else {
//                                $eventkey = "";
                                $eventkey = $response->check_openid_wificonnected($openid);
                            }
                            $response->insert_subscribe($openid, $eventkey, 'subscribe'); //更新openid信息
                            $response->request_focus($openid, $eventkey); //推送关注信息

                            //    $response->request_focus_temp($openid, $eventkey); //黄金周景区预定推送

                            $response->make_user_tag($openid, $eventkey); //标签管理
                            break;
                        case 'SCAN':
                            #重复关注事件
                            $eventkey = $message->EventKey;
                            if ($eventkey == "1336") {
                                $tour = new Tour();
                                $content = new Text();
                                $content->content = $tour->verification_subscribe($openid, '1');
                                return $content;

                            } else {
                                $response->insert_subscribe($openid, $eventkey, 'scan'); //更新openid信息
                                $response->request_focus($openid, $eventkey); //推送关注信息

                                //      $response->request_focus_temp($openid, $eventkey); //黄金周景区预定推送

                                $response->make_user_tag($openid, $eventkey); //标签管理
                            }
                            break;
                        case 'unsubscribe':
                            #取消关注事件
                            $response->insert_unsubscribe($openid); //更新数据信息

                            break;
                        case 'WifiConnected':
                            #wifi连接事件
                            $response->return_WifiConnected($message);

                            break;*/
                    }
                    break;
                case 'text':
                    //把内容加入wx_recevice_txt
                    DB::table('wx_recevice_txt')
                        ->insert(['wx_openid' => $openid, 'content' => $message->Content]);
                    $content = ($response->news($message, $message->Content));
                    return $content;

                    break;
                case 'image':

                    # 图片消息...
                    break;
                case 'voice':
                    # 语音消息...
                    break;
                case 'video':
                    # 视频消息...
                    break;
                case 'location':
                    # 坐标消息...
                    break;
                case 'link':
                    # 链接消息...
                    break;
                // ... 其它消息
                default:
                    # code...
                    break;
            }
        });

        return $app->server->serve();
    }
}
