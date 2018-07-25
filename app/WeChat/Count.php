<?php
/**
 * Created by PhpStorm.
 * User: wangke
 * Date: 16/10/26
 * Time: 下午12:17
 */

namespace App\WeChat;

use DB;
use Carbon\Carbon;

class Count
{
    /*
     * 增加阅读数wx_article
     *
     */
    public function add_article_hits($id)
    {
        DB::table('wx_article')
            ->where('id', $id)
            ->increment('hits');
    }

    /*
     * 插入阅读信息 wx_article_hits
     * $id: 文章id
     * $openid
     */
    public function insert_hits($id, $openid)
    {

        if (!$this->time_check($id, $openid)) {
            DB::table('wx_article_hits')
                ->insert(['article_id' => $id, 'wx_openid' => $openid]);
        }
    }

    private function time_check($id, $openid)
    {
        $past_time = Carbon::now()->subSeconds(30);
        $row = DB::table('wx_article_hits')
            ->where('article_id', $id)
            ->where('wx_openid', $openid)
            ->where('adddate', '>', $past_time)
            ->orderBy('id', 'desc')
            ->get();
        if ($row) {
            return true;
        } else {
            return false;
        }
    }


    /*
     * 增加转发数 wx_article表中的resp增加
     *
     */
    public function add_article_resp($id)
    {
        DB::table('wx_article')
            ->where('id', $id)
            ->increment('resp');
    }

    /*
     * 插入转发信息 wx_article_res
     *
     */
    public function insert_resp($id, $openid)
    {
        DB::table('wx_article_res')
            ->insert(['article_id' => $id, 'wx_openid' => $openid]);
    }

    /*
     * 增加转发好友数
     */
    public function add_article_respf($id)
    {
        DB::table('wx_article')
            ->where('id', $id)
            ->increment('resp_f');
    }

    /**
     * 增加二次推送阅读数
     * @param $id
     */
    public function add_article_se_hits($id)
    {
        DB::table('wx_article_se')
            ->where('id', $id)
            ->increment('hits');
    }

    public function update_article_se_read($sellid,$openid,$info_id)
    {
        DB::table('se_info_send')
            ->where('sellid', $sellid)
            ->where('wx_openid', $openid)
            ->where('info_id', $info_id)
            ->update(['is_read' => 1, 'readtime' => Carbon::now()]);

    }


}