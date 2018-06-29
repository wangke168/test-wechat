<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use EasyWeChat\Factory;
class ApiController extends Controller
{
    public $weObj;
    public function __construct()
    {
        $this->weObj=app('wechat.official_account');
    }
    public function token()
    {
        return $this->weObj->access_token->getToken();
    }
}
