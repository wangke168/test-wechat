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

        $app = app('wechat.official_account');

        $app->server->push(function ($message) {
            $openid = $message['FromUserName'];

            /*$text = new Text($message['FromUserName']);
            return $text;*/
            $response = new Response();
            switch ($message['MsgType']) {
                case 'event':
                    # 事件消息...
                    switch ($message['Event']) {
                        case 'CLICK':
                            switch ($message['EventKey']) {
                                case "13":
                                    $content = new Text("横店圆明新园官方客服电话" . "\n" . "0579-89600055");
//                                    $content->content = "横店圆明新园官方客服电话" . "\n" . "0579-89600055";
                                    return $content;
                                default:
                                    $response->click_request($openid, $message['EventKey']);
                                    break;
                            }
                            break;

                    }
                    break;
                case 'text':
                    //把内容加入wx_recevice_txt
                    DB::table('wx_recevice_txt')
                        ->insert(['wx_openid' => $openid, 'content' => $message['Content']]);
                    $content = ($response->news($message, $message['Content']));
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
