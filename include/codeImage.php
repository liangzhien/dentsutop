<?php

/*
  ���� session ʵ�ֵ�ͼƬ��֤�� V1.0 sp2
  ����: ů��
  Email: faisun@sina.com
  ��վ: http://www.softpure.com
  ת����ע������
*/

$validateCodeKeepTime = 60 * 1800; //��֤����Чʱ��,��

function validateCode($string,$action="ENCODE"){ //�ַ������ܺͽ���

 $secret_string = 'd0nf873498**&^%$JHJK'; //�����ַ���,���������趨

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

function randString($len=4){ //��������ַ���
 $chars="23456789ABCDEFGHJKLMNPRSTWXY"; //��֤���ȡ���ַ�,ȥ�����ױ��ϵ��ַ�
 $string="";
 for($i=0;$i<$len;$i++){
  srand((double)microtime()*1000000);
  $rand=rand(0,strlen($chars)-1);
  $string.=substr($chars,$rand,1);
 }
 return strtoupper($string);
}

//���ͼƬ
if($_REQUEST[action]=="getimage"){
 
 $decode = validateCode($_GET["secretCode"],"DECODE");
 list($string,$mytime)=split('@',$decode);
 
 if(!$string) $string='   ';
 
 Header("Content-type: image/gif");
 
 $imageWidth  = strlen($string)*20;
 $imageHeight = 20;
 
 $im = imagecreate($imageWidth,$imageHeight);
 
 $backColor  = ImageColorAllocate($im, rand(220,255),rand(220,255),rand(220,255));  //����ɫ
 
 imagefilledrectangle($im, 0, 0, $imageWidth, $imageHeight, $backColor);
 
 for($i=0;$i<100;$i++){ //���ߵ�
  $dotColor   = ImageColorAllocate($im, rand(0,255),rand(0,255),rand(0,255));  //��ɫ
  $x = rand(0,$imageWidth); $y = rand(0,$imageHeight); 
  imagesetpixel($im, $x, $y, $dotColor);
 }
 
 for($i=0;$i<strlen($string);$i++){ //д��
  $frontColor = ImageColorAllocate($im, rand(0,120),rand(0,120),rand(0,120));  //��ɫ
  imagestring($im, 5, rand(20*$i+1,20*$i+10), rand(0,5), substr($string,$i,1),$frontColor);
 }
 
 imagepng($im);
 imagedestroy($im);
 exit;
}
?>
