<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use EasyWeChat\Factory;
class ApiController extends Controller
{
    public $weObj;
    public $js;
    public function __construct()
    {
        $this->weObj=app('wechat.official_account');
        $this->js=$this->weObj->jssdk;

    }
    public function api()
    {
//        return $this->js->getTicket();
        $token=$this->weObj->access_token->getToken();
        $ticket=$this->js->getTicket();;
        $data=['token'=>$token,'ticket'=>$ticket];
        return response()->json($data);
    }
    public function token()
    {
        $token=$this->weObj->access_token->getToken();
        return $token['access_token'];
//        $data=['token'=>$token];
//        return response()->json($data);
    }
}
