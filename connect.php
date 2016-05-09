<?php
session_start();
ob_start();
include_once( 'global.php' );
ob_end_clean();
$url = 'http://dentsutop.applinzi.com/xm/';
if(!$_SESSION['sns_uid']){
	$url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx15b333fa7a2335c3&redirect_uri=http://dentsutop.applinzi.com/xm/wx_callback.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
	if($_GET['id']){
		$url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx15b333fa7a2335c3&redirect_uri=http://dentsutop.applinzi.com/xm/wx_callback.php?id='.$_GET['id'].'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
	}
}else{
	if($_GET['id']){
		$url = 'http://dentsutop.applinzi.com/xm/main.php?id='.$_GET['id'];
		$rs = $db->find("select uid from usr_draw_log where id=$_GET[id]");
		if($rs['uid'] == $_SESSION['sns_uid']){
			$url = 'http://dentsutop.applinzi.com/xm/my.php?id='.$_GET['id'];
		}
		//$url = 'http://dentsutop.applinzi.com/xm/share.html?id='.$_GET['id'];
	}else{
		$url = 'http://dentsutop.applinzi.com/xm/game.php';
	}
}
echo "<script>window.location = '$url'</script>";
?>