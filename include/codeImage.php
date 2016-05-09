<?php

/*
  不用 session 实现的图片认证码 V1.0 sp2
  作者: 暖阳
  Email: faisun@sina.com
  网站: http://www.softpure.com
  转载请注明出处
*/

$validateCodeKeepTime = 60 * 1800; //验证码有效时间,秒

function validateCode($string,$action="ENCODE"){ //字符串加密和解密

 $secret_string = 'd0nf873498**&^%$JHJK'; //绝密字符串,可以任意设定

 if($string=="") return "";
 if($action=="ENCODE") $md5code=substr(md5($string),8,10);
 else{
  $md5code=substr($string,-10); 
  $string=substr($string,0,strlen($string)-10); 
 }
 $key = md5($md5code.$_SERVER["HTTP_USER_AGENT"].$secret_string);
 $string = ($action=="ENCODE"?$string:base64_decode($string));
 $len = strlen($key);
 $code = "";
 for($i=0; $i<strlen($string); $i++){
  $k = $i%$len;
  $code .= $string[$i]^$key[$k];
 }
 $code = ($action == "DECODE" ? (substr(md5($code),8,10)==$md5code?$code:NULL) : base64_encode($code)."$md5code");
 return $code;
}

function randString($len=4){ //产生随机字符串
 $chars="23456789ABCDEFGHJKLMNPRSTWXY"; //验证码可取的字符,去掉不易辨认的字符
 $string="";
 for($i=0;$i<$len;$i++){
  srand((double)microtime()*1000000);
  $rand=rand(0,strlen($chars)-1);
  $string.=substr($chars,$rand,1);
 }
 return strtoupper($string);
}

//输出图片
if($_REQUEST[action]=="getimage"){
 
 $decode = validateCode($_GET["secretCode"],"DECODE");
 list($string,$mytime)=split('@',$decode);
 
 if(!$string) $string='   ';
 
 Header("Content-type: image/gif");
 
 $imageWidth  = strlen($string)*20;
 $imageHeight = 20;
 
 $im = imagecreate($imageWidth,$imageHeight);
 
 $backColor  = ImageColorAllocate($im, rand(220,255),rand(220,255),rand(220,255));  //背景色
 
 imagefilledrectangle($im, 0, 0, $imageWidth, $imageHeight, $backColor);
 
 for($i=0;$i<100;$i++){ //画斑点
  $dotColor   = ImageColorAllocate($im, rand(0,255),rand(0,255),rand(0,255));  //点色
  $x = rand(0,$imageWidth); $y = rand(0,$imageHeight); 
  imagesetpixel($im, $x, $y, $dotColor);
 }
 
 for($i=0;$i<strlen($string);$i++){ //写字
  $frontColor = ImageColorAllocate($im, rand(0,120),rand(0,120),rand(0,120));  //字色
  imagestring($im, 5, rand(20*$i+1,20*$i+10), rand(0,5), substr($string,$i,1),$frontColor);
 }
 
 imagepng($im);
 imagedestroy($im);
 exit;
}
?>
