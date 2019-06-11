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
                $menus = $this->menu->list();
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
                "name" => "会议会展",
                "sub_button" => [
                    [
                        "type" => "view",
                        "name" => "酒店会场",
                        "url" => "https://mp.weixin.qq.com/s/uYGh32ht_Tz0XkIRbwJoug"
                    ],
                    [
                        "type" => "view",
                        "name" => "景区剧场",
                        "url" => "https://mp.weixin.qq.com/s/blcC9BMEDviELXFoonYxdg"
                    ],
                    [
                        "type" => "view",
                        "name" => "特色资源",
                        "url" => "https://mp.weixin.qq.com/s/vyKJt8EtOa0lAbvHDFgjug"
                    ],
                    [
                        "type" => "view",
                        "name" => "穿越主题会议",
                        "url" => "https://mp.weixin.qq.com/s/GljFzb8Ygib_Dq0DdEI7Tw"
                    ],
                    [
                        "type" => "view",
                        "name" => "成功案例",
                        "url" => "https://mp.weixin.qq.com/s/d48y9Gso3MuaZqcUZsC6Rw"
                    ],
                ],
            ],
            [
                "name" => "活动赛事",
                "sub_button" => [
                    [
                        "type" => "click",
                        "name" => "品牌赛事",
                        "key" => "7"
                    ],
                    [
                        "type" => "view",
                        "name" => "儿童电影节",
                        "key" => "https://mp.weixin.qq.com/s/8GWBO7eNtkk9AMl4TpM4sQ"
                    ],
                    [
                        "type" => "view",
                        "name" => "影视旅游小姐大赛",
                        "url" => "https://mp.weixin.qq.com/s/AQKGow97mWlyZC2h41y4Og"
                    ],
                    [
                        "type" => "view",
                        "name" => "横店影视武林会",
                        "url" => "https://mp.weixin.qq.com/s/PNxklfedA_iSHwIqFrkzyA"
                    ],
                    [
                        "type" => "click",
                        "name" => "童星盛典",
                        "url" => "8"
                    ],
                ],
            ],
            [
                "name" => "疗休养",
                "sub_button" => [
                    [
                        "type" => "view",
                        "name" => "横店景区简介",
                        "key" => "http://m.hengdianworld.com/info_jq.aspx"
                    ],
                    [
                        "type" => "view",
                        "name" => "演艺秀简介",
                        "key" => "http://m.hengdianworld.com/info_yyx.aspx"
                    ],
                    [
                        "type" => "view",
                        "name" => "尊享卡",
                        "url" => "https://mp.weixin.qq.com/s/kpUcrdVdAfOdsnZE_bJBSA"
                    ],
                    [
                        "type" => "view",
                        "name" => "横店疗休养",
                        "url" => "https://mp.weixin.qq.com/s/UOVSMJNaVxTBrDt984vHPw"
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

        $this->menu->creatagidte($buttons);

    }


    private function add_other($tagid)
    {
        $buttons = [
            [
                "name" => "我要预订",
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

        $this->menu->create($buttons, $matchRule);
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
