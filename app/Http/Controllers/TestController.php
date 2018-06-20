<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use EasyWeChat\Factory;
use EasyWeChat\Kernel\Messages\Text;
class TestController extends Controller
{
    public $weObj;
    public $config;
    public function __construct()
    {
        $this->weObj=app('wechat.official_account');
    }
}
