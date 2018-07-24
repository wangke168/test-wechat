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
    public function index()
    {
        $message = new Text('FromUserName');
        $result = $this->weObj->customer_service->message($message)->to('o5--l1Pl9YZWPj9n342XbdpJdG8w')->send();

    }
    public function test()
    {
        $row=\DB::table('wx_recevice_txt')
            ->insert(['wx_openid' => 'dasdasdsa', 'content' => 'sadas']);
        return $row;
    }
}
