<?php
/**
 * Created by PhpStorm.
 * User: wangke
 * Date: 16-9-24
 * Time: 上午9:12
 */

namespace App\WeChat;

//和订单有关的类
class Order
{
    /**
     * 根据订单号查询信息
     * @param $sellid ：订单号
     *
     */
    public function get_order_detail($sellid)
    {
        $url=env('ORDER_URL','');
        $json = file_get_contents($url."searchorder_json.aspx?sellid=" . $sellid);
//        $json = file_get_contents("http://10.0.61.201/searchorder_json.aspx?sellid=" . $sellid);
        $data = json_decode($json, true);

        $ticketcount = count($data['ticketorder']);
        $inclusivecount = count($data['inclusiveorder']);
        $hotelcount = count($data['hotelorder']);

        if ($ticketcount <> 0) {
            $ticket_id = 1;

            $name = $data['ticketorder'][0]['name'];
            $phone = $data['ticketorder'][0]['phone'];
            $addtime = $data['ticketorder'][0]['date1'];
            $date = $data['ticketorder'][0]['date2'];
            $ticket = $data['ticketorder'][0]['ticket'];
            $numbers = $data['ticketorder'][0]['numbers'];
            $ticketorder = $data['ticketorder'][0]['ticket'];
            $flag = $data['ticketorder'][0]['flag'];

            $result = array(
                "ticket_id" => $ticket_id,
                "name" => $name,
                "phone" => $phone,
                "sellid" => $sellid,
                "addtime" => $addtime,
                "date" => $date,
                "ticket" => $ticket,
                "numbers" => $numbers,
                "ticketorder" => $ticketorder,
                "flag" => $flag,
            );
//            }
        }
        if ($inclusivecount <> 0) {
            $ticket_id = 2;

            $name = $data['inclusiveorder'][0]['name'];
            $phone = $data['inclusiveorder'][0]['phone'];
            $addtime = $data['inclusiveorder'][0]['date1'];
            $date = $data['inclusiveorder'][0]['date2'];
            $ticket = $data['inclusiveorder'][0]['ticket'];
            $hotel = $data['inclusiveorder'][0]['hotel'];
            $flag = $data['inclusiveorder'][0]['flag'];


            $result = array(
                "ticket_id" => $ticket_id,
                "name" => $name,
                "phone" => $phone,
                "sellid" => $sellid,
                "addtime" => $addtime,
                "date" => $date,
                "ticket" => $ticket,
                "hotel" => $hotel,
                "flag" => $flag,
            );
//            }
        }
        if ($hotelcount <> 0) {
            $ticket_id = 3;

            $name = $data['hotelorder'][0]['name'];
            $phone = $data['hotelorder'][0]['phone'];
            $addtime = $data['hotelorder'][0]['date1'];
            $date = $data['hotelorder'][0]['date2'];
            $days = $data['hotelorder'][0]['days'];
            $hotel = $data['hotelorder'][0]['hotel'];
            $numbers = $data['hotelorder'][0]['numbers'];
            $roomtype = $data['hotelorder'][0]['roomtype'];
            $flag = $data['hotelorder'][0]['flag'];


            $result = array(
                "ticket_id" => $ticket_id,
                "name" => $name,
                "phone" => $phone,
                "sellid" => $sellid,
                "addtime" => $addtime,
                "date" => $date,
                "days" => $days,
                "hotel" => $hotel,
                "numbers" => $numbers,
                "roomtype" => $roomtype,
                "flag" => $flag,

            );

//            }

        }
        return $result;
    }


}