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

Route::get('/api','ApiController@api');

Route::get('/token','ApiController@token');

Route::get('/menu','MenuController@menu');
Route::get('/menu/add','MenuController@add');