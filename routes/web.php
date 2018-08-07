<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::any('/wechat', 'WeChatController@serve');

Route::get('/test', 'TestController@response_test1');


//输出token
Route::get('/api','ApiController@api');
Route::get('/token','ApiController@token');


//菜单相关
Route::get('/menu','MenuController@menu');
Route::get('/menu/add','MenuController@add');

//跳转
Route::get('/jump/{id}/{openid}','LinkJumpController@index');

//订单相关
Route::get('/ordersend/{sellid}/{openid}','Order\OrderController@send');
Route::get('/orderconfrim/{sellid}/{openid}','Order\OrderController@confrim');

//文章管理
Route::get('/article/detail', 'ArticlesController@detail');
//预览
Route::get('/article/review', 'ArticlesController@detail_review');