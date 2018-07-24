<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


//use EasyWeChat\Foundation\Application;

class MenuController extends Controller
{
    public $app;
    public $menu;

//    public $usage;

    public function __construct()
    {
        $this->app = app('wechat.official_account');
        $this->menu = $this->app->menu;
//        $this->usage = new Usage();
    }

    public function menu(Request $request)
    {
        $type = $request->input('type');
        switch ($type) {
            case 'index':
                $menus = $this->menu->all();
                return $menus;
                break;
            case 'add':
                $this->add();
                break;
            case 'add_other':
                $tagid = $request->input('tagid');
                $this->add_other($tagid);
                break;
            case 'del':
                $menuId = $request->input('menuid');
                $this->menu->destroy($menuId);
                break;
            default:
                $menus = $this->menu->all();
                return $menus;
                break;
        }
    }


    public function index()
    {
        $menus = $this->menu->all();
        return $menus;
    }

    private function add()
    {
        $buttons = [
            [
                "name" => "圆明新园",
                "sub_button" => [
                    [
                        "type" => "view",
                        "name" => "景区简介",
                        "url" => "https://wechat.hdyuanmingxinyuan.com/info_jq_detail"
                    ],
                    [
                        "type" => "view",
                        "name" => "地图导览",
                        "url" => "http://nwx.weijingtong.net/map/206"
                    ],
                    [
                        "type" => "view",
                        "name" => "游玩攻略",
                        "url" => "http://nwx.weijingtong.net/corpus/360"
                    ],
                ],
            ],
            [
                "name" => "我要预订",
                "sub_button" => [
                    [
                        "type" => "click",
                        "name" => "门票预订",
                        "key" => "7"
                    ],
                    [
                        "type" => "click",
                        "name" => "年卡办理",
                        "key" => "23"
                    ],
                    [
                        "type" => "view",
                        "name" => "订单查询",
                        "url" => "http://ydpt.hdyuanmingxinyuan.com/yd_search.aspx"
                    ],
                ],
            ],
            [
                "name" => "游园指南",
                "sub_button" => [
                    [
                        "type" => "click",
                        "name" => "客服电话",
                        "key" => "13"
                    ],
                    [
                        "type" => "click",
                        "name" => "节目时间表",
                        "key" => "14"
                    ],
                    [
                        "type" => "view",
                        "name" => "交通速查",
                        "url" => "https://wechat.hdyuanmingxinyuan.com/article/detail?id=1492"
                    ],
                    /*      [
                              "type" => "click",
                              "name" => "行程推荐",
                              "key"  => "22"
                          ],
                          [
                              "type" => "view",
                              "name" => "常见问题",
                              "url"  => "http://ydpt.hdymxy.com/yd_search.aspx"
                          ],*/
                ],
            ],
        ];

        /*        $matchRule = [
                    "tag_id"             => "100",
                    "sex"                  => "",
                    "country"              => "",
                    "province"             => "",
                    "city"                 => "",
                    "client_platform_type" => ""
                ];*/

//        $this->menu->add($buttons, $matchRule);
        $this->menu->create($buttons);

    }


    private function add_other($tagid)
    {
        $buttons = [
            [
                "name" => "圆明新园",
                "sub_button" => [
                    [
                        "type" => "view",
                        "name" => "景区简介",
                        "url" => "http://www.hdyuanmingxinyuan.com/mobile"
                    ],
                    [
                        "type" => "view",
                        "name" => "地图导览",
                        "url" => "http://nwx.weijingtong.net/map/206"
                    ],
                    [
                        "type" => "view",
                        "name" => "游玩攻略",
                        "url" => "http://nwx.weijingtong.net/corpus/360"
                    ],
                ],
            ],
            [
                "name" => "我要预订",
                "sub_button" => [
                    [
                        "type" => "click",
                        "name" => "门票购买",
                        "key" => "97"
                    ],
                    [
                        "type" => "view",
                        "name" => "订单查询",
                        "url" => "http://ydpt.hdyuanmingxinyuan.com/yd_search.aspx"
                    ],
                ],
            ],
            [
                "name" => "游园指南",
                "sub_button" => [
                    [
                        "type" => "click",
                        "name" => "客服电话",
                        "key" => "13"
                    ],
                    [
                        "type" => "click",
                        "name" => "节目时间表",
                        "key" => "14"
                    ],
                    /*        [
                                "type" => "click",
                                "name" => "交通速查",
                                "key"  => "16"
                            ],
                            [
                                "type" => "click",
                                "name" => "行程推荐",
                                "key"  => "22"
                            ],
                            [
                                "type" => "view",
                                "name" => "常见问题",
                                "url"  => "http://ydpt.hdymxy.com/yd_search.aspx"
                            ],*/
                ],
            ],
        ];

        $matchRule = [
            "tag_id" => $tagid,
            "sex" => "",
            "country" => "",
            "province" => "",
            "city" => "",
            "client_platform_type" => ""
        ];

        $this->menu->add($buttons, $matchRule);
//        $this->menu->add($buttons);

    }


    public function add_temp()
    {
        $buttons = [
            [
                "name" => "景区资讯",
                "sub_button" => [
                    [
                        "type" => "click",
                        "name" => "最新活动",
                        "key" => "2"
                    ],
                    [
                        "type" => "click",
                        "name" => "景区简介",
                        "key" => "3"
                    ],
                    [
                        "type" => "click",
                        "name" => "演艺秀",
                        "key" => "4"
                    ],
                ],
            ],
            [
                "name" => "我要预订",
                "sub_button" => [
                    [
                        "type" => "click",
                        "name" => "门票预订",
                        "key" => "7"
                    ],
                    [
                        "type" => "view",
                        "name" => "订单查询",
                        "url" => "http://ydpt.hdyuanmingxinyuan.com/yd_search.aspx"
                    ],
                ],
            ],
            [
                "name" => "游玩攻略",
                "sub_button" => [
                    [
                        "type" => "click",
                        "name" => "客服电话",
                        "key" => "13"
                    ],
                    [
                        "type" => "click",
                        "name" => "节目时间表",
                        "key" => "14"
                    ],
                    [
                        "type" => "click",
                        "name" => "交通速查",
                        "key" => "16"
                    ],
                    [
                        "type" => "click",
                        "name" => "行程推荐",
                        "key" => "22"
                    ],
                    [
                        "type" => "view",
                        "name" => "常见问题",
                        "url" => "http://ydpt.hdyuanmingxinyuan.com/yd_search.aspx"
                    ],
                ],
            ],
        ];

        /*  $matchRule = [
              "tag_id"             => "173",
              "sex"                  => "",
              "country"              => "",
              "province"             => "",
              "city"                 => "",
              "client_platform_type" => ""
          ];*/

//        $this->menu->add($buttons, $matchRule);
        $this->menu->add($buttons);

    }
}
