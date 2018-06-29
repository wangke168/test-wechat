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
        $this->js=$this->weObj->js;
    }
    public function token()
    {
        $token=$this->weObj->access_token->getToken();
        $ticket=$this->js->ticket();
        $data=['token'=>$token,'ticket'=>$ticket];
        return response()->json($data);
    }
}
