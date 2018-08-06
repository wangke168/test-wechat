<!DOCTYPE html>
<html lang="zh-hans">
<head id="Head2">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta name="MobileOptimized" content="320"/>
    <meta name="copyright" content="Copyright &copy; 2013 hengdianworld.com Inc. All Rights Reserved."/>
    <meta name="description" content="掌上横店！掌上横店是横店圆明新园的移动门户"/>
    <meta name="keywords" content="掌上横店,掌上横店圆明新园,横店圆明新园手机版网站"/>
    <title>{{$article->title}}</title>
    <link href="{{asset('css/mbcss.css')}}" rel="stylesheet" type="text/css"/>
    <style type="text/css">
        img {
            max-width: 100%;
        }
    </style>
    <script src="{{asset('js/jquery-1.10.2.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/divheight.js')}}"></script>

    <script>
        $(function () {
            var awidth = parseInt($(document).width());//获取屏幕的宽度
            $("iframe").css({"width": "100%"})  //设置宽度
                .height(awidth / 4 * 3);  //设置高度
        })
    </script>

</head>
<body>


<div id="main">

    <div id="header">
        <!--       <span class="left-head"  onclick="javascript:history.go(-1);"></span>
               <span class="right-head" onclick="javascript:location.href='http://m.hengdianworld.com';"></span>
     -->

    </div>
    <div id="title">
        {{$article->title}}</div>
    <div id="titleinfo">
        横店圆明新园 {{$article->adddate}}</div>
    <div id="contents">

        {!!str_replace("\"/control/editor/attached/image/","\"http://weix2.hengdianworld.com/control/editor/attached/image/",$article->content)!!}

        <?php
        if ($article->show_qr == 1) {
            echo "<p><img src=\images\market\\" . $article->eventkey . ".jpg width=100%></p>";
        }
        ?>

    </div>

    <!-- <div id="tempheight" style="clear:both;"></div>-->
    <div id="bottom">
        <div style="color:#fff;"><img src="{{asset('images/tel.png')}}" width="15" height="15" border=0/>
            热线电话：<a href="tel:057989600055"> 0579-89600055</a>
        </div>
        <div>©2013-2017 横店圆明新园 版权所有</div>
    </div>

</div>
</body>

<?php

if ($article->pyq_pic == '') {
    /*   preg_match_all('#<img.*?src="([^"]*)"[^>]*>#i', $article->content, $match);
       if (count($match[0]) != 0) {
           $imgUrl = str_replace(' />', '', (str_replace('<img src="', '', $match[0][0])));
           $imgUrl = str_replace('alt=""', '', $imgUrl);
           $imgUrl = str_replace('"', '', $imgUrl);
           $imgUrl = str_replace(' ', '', $imgUrl);
           $imgUrl = str_replace('<img src=', '', $imgUrl);
       } else {*/
    $imgUrl = "http://weix2.hengdianworld.com/media/image/pyq_title.jpg";
    //  }
} else {
    $imgUrl = "http://weix2.hengdianworld.com/" . $article->pyq_pic;
}





$url = \Illuminate\Support\Facades\URL::current() . '?id=' . $id;
$resp_url = 'http://ydpt.hdyuanmingxinyuan.com/WeixinOpenId.aspx?nexturl=' . $url;

if ($article->pyq_title) {
    $pyq_title = $article->pyq_title;
} else {
    $pyq_title = $article->title;
}
?>

<script src="//res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" charset="utf-8">
    wx.config(<?php echo $app->jssdk->buildConfig(array('onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone'), true) ?>);

    wx.ready(function () {

        wx.onMenuShareAppMessage({
            title: '<?php echo $pyq_title;?>', // 分享标题
            desc: '<?php echo $article->description;?>', // 分享描述
            link: '<?php echo $resp_url;?>', // 分享链接
            imgUrl: '<?php echo $imgUrl?>', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
                $.get('/count/addrespf/<?php echo $id;?>/<?php echo $openid;?>');
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareTimeline({
            title: '<?php echo $pyq_title?>',
            link: '<?php echo $resp_url?>',
            imgUrl: '<?php echo $imgUrl?>',
            success: function (res) {
//                alert('已分享');
                $.get('/count/addresp/<?php echo $id;?>/<?php echo $openid;?>');
            },
            fail: function (res) {
//                alert(JSON.stringify(res));
            }

        });
    });

    wx.error(function (res) {
        alert(res.errMsg);
    });


</script>

</html>