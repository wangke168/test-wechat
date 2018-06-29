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
//        $this->js=$this->weObj->js;
    }
    public function token()
    {
        $token=$this->weObj->access_token->getToken();

        $data=['token'=>$token];
        return response()->json($data);
    }
}
