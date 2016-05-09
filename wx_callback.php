<?php
session_start();
ob_start();
include_once( 'global.php' );
include_once( 'include/function.web.php' );
ob_end_clean();
$appid = 'wx15b333fa7a2335c3';
$appsecret = 'bca4001502412cbba73c3edc168f7540';
$state = strip_tags(trim($_REQUEST['state']));
$code = isset($_GET['code'])?$_GET['code']:'';
if ($code){
	$access = http_get('https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$appid.'&secret='.$appsecret.'&code='.$code.'&grant_type=authorization_code');
	if ($access){
		$accessJson = json_decode($access,true);
		$access_token = $accessJson['access_token'];
		$openid = $accessJson['openid'];
		if($openid){
			$user = http_get('https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$openid);
			if($user){
				$userInfo = json_decode($user,true);
				if($userInfo['openid']){
					$uid = user_save($userInfo['openid'],$userInfo);
				}
			}
		}
	}
}
if($_GET['id']){
	$url = 'connect.php?id='.$_GET['id'];
	echo '<script>window.location = "'.$url.'";</script>';
}else{
	$url = 'connect.php';
	echo '<script>window.location = "'.$url.'";</script>';
}
?>