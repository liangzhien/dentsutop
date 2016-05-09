<?php 
/*构造函数-生成缩略图+水印,参数说明: 
$srcFile-图片文件名, 
$dstFile-另存文件名, 
$markwords-水印文字, 
$markimage-水印图片, 
$dstW-图片保存宽度, 
$dstH-图片保存高度, 
$rate-图片保存品质*/ 
//makethumb("upload/20088816500109_801.jpg","upload/20088816500109_801_s.jpg","50","50"); 
function makethumb($srcFile,$dstFile,$dstW,$dstH,$rate=100,$markwords=null,$markimage=null) 
{ 
$data = GetImageSize($srcFile); 
switch($data[2]) 
{ 
case 1: 
$im=@ImageCreateFromGIF($srcFile); 
break; 
case 2: 
$im=@ImageCreateFromJPEG($srcFile); 
break; 
case 3: 
$im=@ImageCreateFromPNG($srcFile); 
break; 
} 
if(!$im) return False; 
$srcW=ImageSX($im); 
$srcH=ImageSY($im); 
$dstX=0; 
$dstY=0; 
if ($srcW*$dstH>$srcH*$dstW) 
{ 
$fdstH = round($srcH*$dstW/$srcW); 
$dstY = floor(($dstH-$fdstH)/2); 
$fdstW = $dstW; 
} 
else 
{ 
$fdstW = round($srcW*$dstH/$srcH); 
$dstX = floor(($dstW-$fdstW)/2); 
$fdstH = $dstH; 
} 
$ni=ImageCreateTrueColor($dstW,$dstH); 
$dstX=($dstX<0)?0:$dstX; 
$dstY=($dstX<0)?0:$dstY; 
$dstX=($dstX>($dstW/2))?floor($dstW/2):$dstX; 
$dstY=($dstY>($dstH/2))?floor($dstH/s):$dstY; 
$white = ImageColorAllocate($ni,255,255,255); 
$black = ImageColorAllocate($ni,0,0,0); 
imagefilledrectangle($ni,0,0,$dstW,$dstH,$white);// 填充背景色 
ImageCopyResized($ni,$im,$dstX,$dstY,0,0,$fdstW,$fdstH,$srcW,$srcH); 
if($markwords!=null) 
{ 
$markwords=iconv("gb2312","UTF-8",$markwords); 
//转换文字编码 
ImageTTFText($ni,20,30,450,560,$black,"simhei.ttf",$markwords); //写入文字水印 
//参数依次为，文字大小|偏转度|横坐标|纵坐标|文字颜色|文字类型|文字内容 
} 
elseif($markimage!=null) 
{ 
$wimage_data = GetImageSize($markimage); 
switch($wimage_data[2]) 
{ 
case 1: 
$wimage=@ImageCreateFromGIF($markimage); 
break; 
case 2: 
$wimage=@ImageCreateFromJPEG($markimage); 
break; 
case 3: 
$wimage=@ImageCreateFromPNG($markimage); 
break; 
} 
//imagecopy($ni,$wimage,500,560,0,0,88,31); //写入图片水印,水印图片大小默认为88*31 
//imagedestroy($wimage); 
} 
ImageJpeg($ni,$dstFile,$rate); 
//ImageJpeg($ni,$srcFile,$rate); 
imagedestroy($im); 
imagedestroy($ni); 
}

/*
   函数：生成缩略图
    MakeBuild("images/a.jpg","news/b.jpg","100");
   参数：
   echo $BuildFile;   原图 带路径
   echo $newFile;    生成的缩略图 带路径
   echo $File_width;   缩略图宽度值
   echo $File_height;   缩略图高度值 (默认为宽度的比例值)
   echo $rate;     缩略图象品质;
*/
function MakeBuild($BuildFile,$newFile,$File_width,$File_height=0,$rate=100){ 
   if(!is_file($BuildFile)){
    $this->msg("文件 ".$BuildFile." 不是一个有效的图形文件！\n\n系统无法生成该文件的缩略图！");
    return false;
   }
   $data = GetImageSize($BuildFile); 
   switch($data[2]){ 
   case 1: 
    $im = @ImageCreateFromGIF($BuildFile); 
    break;
   case 2: 
    $im = @ImageCreateFromJPEG($BuildFile); 
    break;
   case 3: 
    $im = @ImageCreateFromPNG($BuildFile); 
    break;
   } 
   if(!$im){
    return false;
   }
   else{
    $srcW=ImageSX($im);  # 取得原图宽度;
    $srcH=ImageSY($im); # 取得原图高度;
    $dstX=0; 
    $dstY=0; 
   
    if($File_height==0){
     $File_height = $File_width/$srcW*$srcH;
    }
   
    if ($srcW*$File_height>$srcH*$File_width){ 
     $fFile_height = round($srcH*$File_width/$srcW); 
     $dstY = floor(($File_height-$fFile_height)/2); 
     $fFile_width = $File_width; 
    } 
    else { 
     $fFile_width = round($srcW*$File_height/$srcH); 
     $dstX = floor(($File_width-$fFile_width)/2); 
     $fFile_height = $File_height; 
    } 
    $ni = ImageCreateTrueColor($fFile_width,$fFile_height); 
    $dstX = ($dstX<0)?0:$dstX; 
    $dstY = ($dstX<0)?0:$dstY; 
    $dstX = ($dstX>($fFile_width/2))?floor($fFile_width/2):$dstX; 
    $dstY = ($dstY>($fFile_height/2))?floor($fFile_height/s):$dstY;
    $white = ImageColorAllocate($ni,255,255,255); 
	$black = ImageColorAllocate($ni,0,0,0); 
	imagefilledrectangle($ni,0,0,$fFile_width,$fFile_height,$white);// 填充背景色 
    ImageCopyResized($ni,$im,0,0,0,0,$fFile_width,$fFile_height,$srcW,$srcH); 
   
    ImageJpeg($ni,$newFile,$rate); # 生成缩略图;
    imagedestroy($im);     # imagedestroy(resource) 释放image关联的内存
   }
}
?>