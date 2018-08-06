<?php
/**
 * Created by PhpStorm.
 * User: wangke
 * Date: 17/3/1
 * Time: 下午4:10
 */

namespace App\WeChat;


use DB;

class Zone
{
    /**
     * 获取演艺秀名称
     * @param $project_id
     * @return mixed|static
     */
    public function get_project_info($project_id)
    {
        $row = DB::table('zone_show_info')
            ->where('id', $project_id)
            ->first();
        return $row;
    }

    public function get_zone_info($zone_id)
    {
        $row = DB::table('zone')
            ->where('id', $zone_id)
            ->first();
        return $row;
    }

    public function get_correct_show($id, $show_id, $date)
    {
        $temp = DB::table('zone_show_time')
            ->whereDate('startdate', '<=', $date)
            ->whereDate('enddate', '>=', $date)
            ->where('show_id', $show_id)
            ->orderBy('is_top', 'desc')
            ->first();
        if ($id == $temp->id) {
            return true;
        } else {
            return false;
        }
    }
}