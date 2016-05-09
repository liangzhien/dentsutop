<?php
//session_start();
$cdnUrl = "";//http://cbuxm.b0.upaiyun.com/
//if($_GET['source']){
//$_SESSION['source'] = $_GET['source'];
//}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="full-screen" content="yes">
    <meta name="format-detection" content="telephone=no"/>  
    <meta name="viewport">
    <script>
        var phoneScale = parseInt(window.screen.width)/750;
        document.write('<meta name="viewport" content="width=750, initial-scale = '+phoneScale+', maximum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
        var cdnUrl  = '<?= $cdnUrl; ?>';
    </script>
    <title>我和贵士的一天</title>
    <link rel="stylesheet" href="<?=$cdnUrl?>css/style.css">
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript" charset="utf-8"></script>
    <script src="<?=$cdnUrl?>lib/jquery.js" type="text/javascript" charset="utf-8"></script>
    <script src="<?=$cdnUrl?>js/common.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="<?=$cdnUrl?>js/WeixinApi.js"></script>
</head>
<body>
    <div class="loading">
		<img src="<?=$cdnUrl?>images/loading.gif"/>
		<img src="<?=$cdnUrl?>images/ico16.png" class='ico ico1'/>
		<img src="<?=$cdnUrl?>images/ico16.png" class='ico ico2'/>
    </div>