<?php
$mmc = new Memcache;
$ret = $mmc->connect();
$debug = strip_tags(trim($_REQUEST['debug'])) ? true : false;
if(time()-$mmc->get("time") > 7000 ||$mmc->get("ticket") == ''){
	$access_token = json_decode(http_get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx15b333fa7a2335c3&secret=bca4001502412cbba73c3edc168f7540'),true);
	$jsapi_ticket = json_decode(http_get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='.$access_token['access_token'].'&type=jsapi'),true);
	$mmc->set("ticket", $jsapi_ticket['ticket']);
	$mmc->set("time", time());
}
$config = array(
	'debug' => $debug,
	'appId' => 'wx15b333fa7a2335c3',
	'timestamp' => time(),
	'nonceStr' => createNonceStr(),
	'jsApiList' => array('checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard')
);
$url = strip_tags(trim($_REQUEST['url']));
$str = 'jsapi_ticket='.$mmc->get("ticket").'&noncestr='.$config['nonceStr'].'&timestamp='.$config['timestamp'].'&url='.$url;
$config['signature'] = sha1($str);
echo 'wx.config('.json_encode($config).')';
function createNonceStr($length = 16) {
	$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	$str = "";
	for ($i = 0; $i < $length; $i++) {
	  $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
	}
	return $str;
}
function http_get($url){
	$oCurl = curl_init();
	if(stripos($url,"https://")!==FALSE){
		curl_setopt($oCurl, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($oCurl, CURLOPT_SSL_VERIFYHOST, FALSE);
	}
	curl_setopt($oCurl, CURLOPT_URL, $url);
	curl_setopt($oCurl, CURLOPT_RETURNTRANSFER, 1 );
	$sContent = curl_exec($oCurl);
	$aStatus = curl_getinfo($oCurl);
	curl_close($oCurl);
	if(intval($aStatus["http_code"])==200){
		return $sContent;
	}else{
		return false;
	}
}
?>