<?php
/**
 * 公共PHP函数库
 * @author 
 */

//出现两次或以上，返回重复数组
function repeat_for_two($arr){
	$sift_arr=array();
	$arr_count = array_count_values($arr);
	foreach ($arr_count as $key=>$val){
		if ($val>=2){
			$sift_arr[]=$key;
		}
	}
	return $sift_arr;
}
//屏蔽手机号
function suohao($phone){
	$p = substr($phone,0,3)."*****".substr($phone,8,3);
	return $p;
}
//屏蔽电话号码中间的四位数字
function hidtel($phone){
    $IsWhat = preg_match('/(0[0-9]{2,3}[\-]?[2-9][0-9]{6,7}[\-]?[0-9]?)/i',$phone); //固定电话
    if($IsWhat == 1){
        return preg_replace('/(0[0-9]{2,3}[\-]?[2-9])[0-9]{3,4}([0-9]{3}[\-]?[0-9]?)/i','$1****$2',$phone);
    }else{
        return  preg_replace('/(1[358]{1}[0-9])[0-9]{4}([0-9]{4})/i','$1****$2',$phone);
    }
}
//数组乱序排列
function rand_array($arr){
	$arr_size=sizeof($arr);
	$tmp_arr=array();
	for($i=0;$i<$arr_size;$i++){
	mt_srand((double) microtime()*1000000);
	$rd=mt_rand(0,$arr_size-1);
		if($tmp_arr[$rd]=="") //未配置
		{
		$tmp_arr[$rd]=$arr[$i];
		}else{ //已配置
		$i=$i-1;
		}
	}
	return $tmp_arr;
}

/**
 * 获取客户端IP
 * 
 * @return string
 */
function get_client_ip(){
   if (getenv("HTTP_CLIENT_IP") && strcasecmp(getenv("HTTP_CLIENT_IP"), "unknown"))
       $ip = getenv("HTTP_CLIENT_IP");
   else if (getenv("HTTP_X_FORWARDED_FOR") && strcasecmp(getenv("HTTP_X_FORWARDED_FOR"), "unknown"))
       $ip = getenv("HTTP_X_FORWARDED_FOR");
   else if (getenv("REMOTE_ADDR") && strcasecmp(getenv("REMOTE_ADDR"), "unknown"))
       $ip = getenv("REMOTE_ADDR");
   else if (isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], "unknown"))
       $ip = $_SERVER['REMOTE_ADDR'];
   else
       $ip = "unknown";
	$ip = explode(',',$ip);
	$ip = $ip[0];
   return($ip);
}

/**
 * 获取服务器端IP
 * 
 * @return string
 */
function get_server_ip(){
	return $_SERVER['SERVER_ADDR'];
}

/**
 * 获取页面地址
 * 
 * @author string
 */
function get_url(){
	return 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].($_SERVER['QUERY_STRING']?'?'.$_SERVER['QUERY_STRING']:'');
}
function get_tourl($url){
	preg_match("/^(http:\/\/)?([^\/]+)/i",$url, $matches);
	return $matches[2];
}

function get_client_ipadd($ip){
	if ($ip){
		$ipstring =$ip;
	}else{
		if(function_exists('file_get_contents')){//(PHP 4 >= 4.3.0, PHP 5)
			$ipUrl="http://fw.qq.com/ipaddress";
			$ipstring = file_get_contents($ipUrl);
		}
	}
	//echo $ipstring."<br>";
	$ipstring_arr = explode('"', $ipstring);
	//print_r($ipstring_arr);
	return $ipstring_arr[5].",".$ipstring_arr[7];
}

/**
 * URL重定向
 * 
 * @param string $url  		要定向的URL地址
 * @param integer $time  	定向的延迟时间，单位为秒
 * @param string $msg  		提示信息
 */
function redirect($url,$time=0,$msg='')
{
    //多行URL地址支持
    $url = str_replace(array("\n", "\r"), '', $url);
    if(empty($msg)) {
        $msg    =   "系统将在{$time}秒之后自动跳转到{$url}！";
    }
    if (!headers_sent()) {
        // redirect
        header("Content-Type:text/html; charset=GB2312");
        if(0===$time) {
            header("Location: ".$url);
        }else {
            header("refresh:{$time};url={$url}");
            echo($msg);
        }
        exit();
    }else {
        $str    = "<meta http-equiv='Refresh' content='{$time};URL={$url}'>";
        if($time!=0) {
            $str   .=   $msg;
        }
        exit($str);
    }
}


/**
 * ----------------------------------------------------------
 * 字符串截取，支持中文和其他编码
 * ----------------------------------------------------------
 * @param string $str 需要转换的字符串
 * @param string $start 开始位置
 * @param string $length 截取长度
 * @param string $charset 编码格式
 * @param string $suffix 截断显示字符
 * @return string
 * ----------------------------------------------------------
 */
function msubstr($str, $start=0, $length, $charset="UTF-8", $suffix=true){
	mb_internal_encoding($charset);
	$trimedstr = mb_strimwidth($str, $start, $length, "…");
	return $trimedstr;
	/*
	if (strlen($str)>$length)
	$suffixStr = "…";
	else
	$suffixStr = "";
    if(function_exists("mb_substr"))
        return mb_substr($str, $start, $length, $charset).$suffixStr;
    elseif(function_exists('iconv_substr')) {
        return iconv_substr($str,$start,$length,$charset).$suffixStr;
    }else{
    	$suffixStr="";
    }
    $re['GB2312']   = "/[\x01-\x7f]|[\xc2-\xdf][\x80-\xbf]|[\xe0-\xef][\x80-\xbf]{2}|[\xf0-\xff][\x80-\xbf]{3}/";
    $re['gb2312'] = "/[\x01-\x7f]|[\xb0-\xf7][\xa0-\xfe]/";
    $re['gbk']    = "/[\x01-\x7f]|[\x81-\xfe][\x40-\xfe]/";
    $re['big5']   = "/[\x01-\x7f]|[\x81-\xfe]([\x40-\x7e]|\xa1-\xfe])/";
    preg_match_all($re[$charset], $str, $match);
    $slice = join("",array_slice($match[0], $start, $length));
    return $slice.$suffixStr;
	*/
}

/**
 * 字符串截取
 * 
 * @param string $str 字符串
 * @param integer $max 截取长度
 * @param string $rep Replace with... (Default = '' - No elipsis -)
 * @return string
 */
function getsubstring($str, $length=10, $rep = ''){ 
	$strcut = '';
	for($i = 0; $i < $length - strlen($rep) - 1; $i++) {
	$strcut .= ord($str[$i]) > 127 ? $str[$i].$str[++$i] : $str[$i];
	}
	return $strcut.$rep;
}
function strMax($str, $maxWidth, $rep = '',$encoding='utf-8'){
    $strlen = mb_strlen($str);

    $newStr = '';
    for($pos = 0, $currwidth = 0; $pos < $strlen; ++$pos ){
        $ch = mb_substr($str, $pos, 1, $encoding);
        if ($currwidth + mb_strwidth($ch, $encoding) > $maxWidth){
        	$newStr .= $ch.$rep;
            break;
        }

        $newStr .= $ch;
        $currwidth += mb_strwidth($ch, $encoding) > 1 ? 2 : 1;
    }
	return $newStr; 
}
/**
 * ----------------------------------------------------------
 * 产生随机字串，可用来自动生成密码 默认长度6位 字母和数字混合
 * ----------------------------------------------------------
 * @param string $len 长度
 * @param string $type 字串类型
 * 0字母 1数字 2大写字母 3小写字母 4中文  默认中文数字混合
 * @param string $addChars 额外字符
 * 
 * @return string
 * ----------------------------------------------------------
 */
function rand_string($len=6,$type='',$addChars='') {
    $str ='';
    switch($type) {
        case 0:
            $chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.$addChars;
            break;
        case 1:
            $chars= str_repeat('0123456789',3);
            break;
        case 2:
            $chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.$addChars;
            break;
        case 3:
            $chars='abcdefghijklmnopqrstuvwxyz'.$addChars;
            break;
        case 4:
            $chars = "们以我到他会作时要动国产的一是工就年阶义发成部民可出能方进在了不和有大这主中人上为来分生对于学下级地个用同行面说种过命度革而多子后自社加小机也经力线本电高量长党得实家定深法表着水理化争现所二起政三好十战无农使性前等反体合斗路图把结第里正新开论之物从当两些还天资事队批点育重其思与间内去因件日利相由压员气业代全组数果期导平各基或月毛然如应形想制心样干都向变关问比展那它最及外没看治提五解系林者米群头意只明四道马认次文通但条较克又公孔领军流入接席位情运器并飞原油放立题质指建区验活众很教决特此常石强极土少已根共直团统式转别造切九你取西持总料连任志观调七么山程百报更见必真保热委手改管处己将修支识病象几先老光专什六型具示复安带每东增则完风回南广劳轮科北打积车计给节做务被整联步类集号列温装即毫知轴研单色坚据速防史拉世设达尔场织历花受求传口断况采精金界品判参层止边清至万确究书术状厂须离再目海交权且儿青才证低越际八试规斯近注办布门铁需走议县兵固除般引齿千胜细影济白格效置推空配刀叶率述今选养德话查差半敌始片施响收华觉备名红续均药标记难存测士身紧液派准斤角降维板许破述技消底床田势端感往神便贺村构照容非搞亚磨族火段算适讲按值美态黄易彪服早班麦削信排台声该击素张密害侯草何树肥继右属市严径螺检左页抗苏显苦英快称坏移约巴材省黑武培著河帝仅针怎植京助升王眼她抓含苗副杂普谈围食射源例致酸旧却充足短划剂宣环落首尺波承粉践府鱼随考刻靠够满夫失包住促枝局菌杆周护岩师举曲春元超负砂封换太模贫减阳扬江析亩木言球朝医校古呢稻宋听唯输滑站另卫字鼓刚写刘微略范供阿块某功套友限项余倒卷创律雨让骨远帮初皮播优占死毒圈伟季训控激找叫云互跟裂粮粒母练塞钢顶策双留误础吸阻故寸盾晚丝女散焊功株亲院冷彻弹错散商视艺灭版烈零室轻血倍缺厘泵察绝富城冲喷壤简否柱李望盘磁雄似困巩益洲脱投送奴侧润盖挥距触星松送获兴独官混纪依未突架宽冬章湿偏纹吃执阀矿寨责熟稳夺硬价努翻奇甲预职评读背协损棉侵灰虽矛厚罗泥辟告卵箱掌氧恩爱停曾溶营终纲孟钱待尽俄缩沙退陈讨奋械载胞幼哪剥迫旋征槽倒握担仍呀鲜吧卡粗介钻逐弱脚怕盐末阴丰雾冠丙街莱贝辐肠付吉渗瑞惊顿挤秒悬姆烂森糖圣凹陶词迟蚕亿矩康遵牧遭幅园腔订香肉弟屋敏恢忘编印蜂急拿扩伤飞露核缘游振操央伍域甚迅辉异序免纸夜乡久隶缸夹念兰映沟乙吗儒杀汽磷艰晶插埃燃欢铁补咱芽永瓦倾阵碳演威附牙芽永瓦斜灌欧献顺猪洋腐请透司危括脉宜笑若尾束壮暴企菜穗楚汉愈绿拖牛份染既秋遍锻玉夏疗尖殖井费州访吹荣铜沿替滚客召旱悟刺脑措贯藏敢令隙炉壳硫煤迎铸粘探临薄旬善福纵择礼愿伏残雷延烟句纯渐耕跑泽慢栽鲁赤繁境潮横掉锥希池败船假亮谓托伙哲怀割摆贡呈劲财仪沉炼麻罪祖息车穿货销齐鼠抽画饲龙库守筑房歌寒喜哥洗蚀废纳腹乎录镜妇恶脂庄擦险赞钟摇典柄辩竹谷卖乱虚桥奥伯赶垂途额壁网截野遗静谋弄挂课镇妄盛耐援扎虑键归符庆聚绕摩忙舞遇索顾胶羊湖钉仁音迹碎伸灯避泛亡答勇频皇柳哈揭甘诺概宪浓岛袭谁洪谢炮浇斑讯懂灵蛋闭孩释乳巨徒私银伊景坦累匀霉杜乐勒隔弯绩招绍胡呼痛峰零柴簧午跳居尚丁秦稍追梁折耗碱殊岗挖氏刃剧堆赫荷胸衡勤膜篇登驻案刊秧缓凸役剪川雪链渔啦脸户洛孢勃盟买杨宗焦赛旗滤硅炭股坐蒸凝竟陷枪黎救冒暗洞犯筒您宋弧爆谬涂味津臂障褐陆啊健尊豆拔莫抵桑坡缝警挑污冰柬嘴啥饭塑寄赵喊垫丹渡耳刨虎笔稀昆浪萨茶滴浅拥穴覆伦娘吨浸袖珠雌妈紫戏塔锤震岁貌洁剖牢锋疑霸闪埔猛诉刷狠忽灾闹乔唐漏闻沈熔氯荒茎男凡抢像浆旁玻亦忠唱蒙予纷捕锁尤乘乌智淡允叛畜俘摸锈扫毕璃宝芯爷鉴秘净蒋钙肩腾枯抛轨堂拌爸循诱祝励肯酒绳穷塘燥泡袋朗喂铝软渠颗惯贸粪综墙趋彼届墨碍启逆卸航衣孙龄岭骗休借".$addChars;
            break;
        case 5:
            // 默认去掉了容易混淆的字符oOLl和数字01，要添加请使用addChars参数
            $chars='ABCDEFGHIJKMNPQRSTUVWXYZ23456789'.$addChars;
            break;
        default :
            // 默认去掉了容易混淆的字符oOLl和数字01，要添加请使用addChars参数
            $chars='ABCDEFGHIJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789'.$addChars;
            break;
    }
    if($len>10 ) {//位数过长重复字符串一定次数
        $chars= $type==1? str_repeat($chars,$len) : str_repeat($chars,5);
    }
    if($type!=4) {
        $chars   =   str_shuffle($chars);
        $str     =   substr($chars,0,$len);
    }else{
        // 中文随机字
        for($i=0;$i<$len;$i++){
          $str.= msubstr($chars, floor(mt_rand(0,mb_strlen($chars,'GB2312')-1)),1);
        }
    }
    return $str;
}


function mk_dir($dir, $mode = 0755)
{
  if (is_dir($dir) || @mkdir($dir,$mode)) return true;
  if (!mk_dir(dirname($dir),$mode)) return false;
  return @mkdir($dir,$mode);
}

//自定义函数

//验证输入框是否为空
function isempty($str,$text){
	if(empty($_POST[$str])){
		exit("<script>alert('".$text."不能为空!');window.history.go(-1)</script>");
	}
}
function randomString($len) {
	static $salt = "ABCDEFGHIJKMNPQRSTUVWXYZ23456789";
	mt_srand((double)microtime()*1000000);
	$i = 0;
	$rand='';
	for ($i=0;$i<$len;$i++)
		$rand .= $salt[mt_rand(0, 32)];
	return $rand;
}
function cleanHex($input){ 
    $clean = preg_replace("![\][xX]([A-Fa-f0-9]{1,3})!", "",$input);
    return $clean;
}
function gbkToUtf8 ($value) { 
	return iconv("gbk", "UTF-8", $value); 
} 
function utf8ToGBK ($value) { 
	//return iconv("UTF-8", "gbk", $value); 
	return mb_convert_encoding($value, "GBK", "UTF-8"); 
}
function nl2brStrict($str, $replacement = '<br/>'){
	return preg_replace("/\r\n|\n|\r/", trim($replacement), $str);
   //return preg_replace("((\r\n)+)", trim($replacement), $str);
}
/*
函数名称：str_check()
函数作用：对提交的字符串进行过滤
参    数：$var: 要处理的字符串
返 回 值：返回过滤后的字符串
函数作者：heiyeluren
*/
function str_check($str){
   if (!get_magic_quotes_gpc()){    // 判断magic_quotes_gpc是否打开
	$str = addslashes($str);    // 进行过滤
}
	$str = str_replace("_", "\_", $str);    // 把 ''_''过滤掉
	$str = str_replace("%", "\%", $str);    // 把'' % ''过滤掉
   return $str;
}
function htmldecode($str){
	if(empty($str)) return;
	if($str=="") return $str;
	$str=str_replace("&",chr(34),$str);
	$str=str_replace(">",">",$str);
	$str=str_replace("<","<",$str);
	$str=str_replace("&","&",$str);
	$str=str_replace(" ",chr(32),$str);
	$str=str_replace(" ",chr(9),$str);
	$str=str_replace("'",chr(39),$str);
	$str=str_replace("<br />",chr(13),$str);
	$str=str_replace("''","'",$str);
	$str=str_replace("select","select",$str);
	$str=str_replace("join","join",$str);
	$str=str_replace("union","union",$str);
	$str=str_replace("where","where",$str);
	$str=str_replace("insert","insert",$str);
	$str=str_replace("delete","delete",$str);
	$str=str_replace("update","update",$str);
	$str=str_replace("like","like",$str);
	$str=str_replace("drop","drop",$str);
	$str=str_replace("create","create",$str);
	$str=str_replace("modify","modify",$str);
	$str=str_replace("rename","rename",$str);
	$str=str_replace("alter","alter",$str);
	$str=str_replace("cas","cast",$str);
	$farr = array( 
	"//s+/" , //过滤多余的空白 
	"/<(//?)(img|script|i?frame|style|html|body|title|link|meta|/?|/%)([^>]*?)>/isU" , //过滤 <script 防止引入恶意内容或恶意代码,如果不需要插入flash等,还可以加入<object的过滤 
	"/(<[^>]*)on[a-zA-Z]+/s*=([^>]*>)/isU" , //过滤javascript的on事件 
	); 
	$tarr = array( 
	" " , 
	"<//1//2//3>" , //如果要直接清除不安全的标签，这里可以留空 
	"//1//2" , 
	); 
	$str = preg_replace ( $farr , $tarr , $str ); 
	return $str;
} 

/**
 * 加亮关键词
 * 
 * @param string $content 字符串
 * @param string $key 关键词
 * @return string
 */
function keyHighlight($content,$key) { 
$k_fi=substr($key,0,1);    //取得关键词第一个字符 
$k_len=strlen($key);   //计算关键词字数 
$l_len=strlen($content);    //计算备查文章字数 
for($l_n=0;$l_n<$l_len;$l_n++)  //根据备查文章字数开始循环 
{ 
$l_s=substr($content,$l_n,1);  //取得备查文章当前字符 
	if($l_s=="<")    //如果这个字符是标签的开始的话 
	{ 
		while($l_s!=">")  //我们就寻找这个标签的关闭 
		{ 
		$con.=$l_s;  //导入结果 
		$l_n++;  //当然要开始取备查文章的下一个字符 
		$l_s=substr($content,$l_n,1); 
		} 
	$con.=$l_s; 
	} 
	elseif($l_s==$k_fi)  //如果这个字符与关键词第一个字符相同的话 
	{ 
	   $l_key=substr($content,$l_n,$k_len);  //取备查文章当前位置是否匹配关键词 
	if($l_key!=$key) 
	{ 
	$con.=$l_s;  //导入结果 
	} 
	else  //如果匹配 
	{ 
	$l_n+=$k_len-1;  //计数跳过相应字数 
	$con.="<span style=\"color:#f00;font-weight:bold;text-decoration:underline\">"; 
	$con.=$key; 
	$con.="</span>";  //加亮关键词 
	} 
	}else{ 
	   $con.=$l_s;  //导入结果 
	}
}
  return $con; 
}

/**
 * 检测提交的值是不是含有SQL注射的字符，防止注射，保护服务器安全
 * 
 * @param string $str 提交的变量
 * @return string 返回检测结果，ture or false
 */
/*
function inject_check($str){
     return eregi("select|insert|update|delete|\"|\/\*|\*|\.\.\/|\.\/|union|into|load_file|outfile", $str);    // 进行过滤
}
*/


//验证是否存在
//表，字段，验证内容，返回信息
function is_user($db_con,$form,$str,$msg){
	$sql_s="select $form from $db_con where $form='$str'";
	$rows=mysql_fetch_row(mysql_query($sql_s));
	if($rows){
	echo ("<script type='text/javascript'> alert('很遗憾，".$msg."！');history.go(-1);</script>");
	//mysql_close();
	exit;
	}
}
/* 弹出提示 */
function tips_alert($msg){
	if($msg){
	exit ("<script type='text/javascript'>alert('$msg');history.go(-1);</script>");
	}
}
//构造过滤函数
function cleanTage($text){
	$badwords=array("操你妈","fuck"); //词汇过滤列表 
	$text=rtrim($text); 
	foreach($badwords as $badword) //这里进行词汇的过滤 
	{ 
	if(stristr($text,$badword)==true){ die("错误：你提交的内容含有敏感字眼，请不要提交敏感内容。"); } 
	} 
	$text=htmlspecialchars($text); //HTML替换 
	//这两行把回车替换为 

	$text=str_replace("\r"," ",$text); 
	$text=str_replace("\n","",$text); 
	$text=str_replace("&line;","│",$text); //文本数据库分隔符"&line;"替换为全角的"│" 
	$text=preg_replace("/\s{ 2 }/"," ",$text); //空格替换 
	$text=preg_replace("/\t/"," ",$text); //还是空格替换 
	if(get_magic_quotes_gpc()){ $text=stripslashes($text); } //如果magic_quotes开启，则进行\'的替换 
	return $text; 
}
//输入内容过滤
function checkContent($str){
	$str = strip_tags($str); 
	$str = str_replace('"', "&quot;", $str);
	$str = str_replace("'", "&apos;", $str);
	$str = str_replace("&", "&amp;", $str);
	$str = str_replace("<", "&lt;", $str);
	$str = str_replace(">", "&gt;", $str);
	$str = str_replace("'", "\'", $str);
	//$str = str_replace("_", "\_", $str);    // 把 ''_''过滤掉
	//$str = str_replace("%", "\%", $str);    // 把'' % ''过滤掉
	return $str;
}


/*
第一课程  18号到27号
第二课程  28号到6月3号
第三课程  4号到10号
第四课程 11号到17号
第五课程 18号到24号
*/
//取第几周,返回周
//echo getWeek("2011-5-27");
function getWeek($nowTime=""){
	date_default_timezone_set('PRC');
	if ($nowTime){
	$nowTimeArr  = explode("-",$nowTime);
	$nowTimex = mktime(10,0,0,$nowTimeArr[1],$nowTimeArr[2],$nowTimeArr[0]) ; //起始时间戳
	}else{
	$nowTimex=time();
	}
	
	$endDate = "2011-5-27";
	$endDateArr  = explode("-",$endDate);
	$endDatex = mktime(10,0,0,$endDateArr[1],$endDateArr[2],$endDateArr[0]);
	
	if($nowTimex<=$endDatex){
		$Week_num = 1;
	}else{
		$Week_num =($nowTimex-$endDatex)/604800;//3600,000毫秒*24*7=604800000
		$Week_num = ceil($Week_num)+1;
	}
	return $Week_num;
}
/* 图片按比例缩略 */
//图片连接,图片路径,提示文字,宽度
//返回值：字符串;
function imgageshow($url="",$target="",$imagePath="",$alt="",$maxWidth="",$maxHeight="",$class="",$id="",$urlid=""){
	$imageinfo = GetImageSize($imagePath);
	$width=$imageinfo[0];
	$height=$imageinfo[1];

	$xRatio = $maxWidth / $width; 
	$yRatio = $maxHeight / $height; 

	if ( ($width <= $maxWidth) && ($height <= $maxHeight) ) { 
	$newWidth = $width; 
	$newHeight = $height; 
	}
	else if (($xRatio * $height) < $maxHeight) { 
	$newHeight = ceil($xRatio * $height); 
	$newWidth = $maxWidth; 
	}
	else {
	$newWidth = ceil($yRatio * $width); 
	$newHeight = $maxHeight; 
	}
	if(!empty($url)){
		$html_str.="<a class='".$urlid."' href='".$url."'";
		if(!empty($alt)){ $html_str.=" title='".$alt."'"; }
		if(!empty($target)){ $html_str.=" target='".$target."'><img border='0'"; }
	}else{
		$html_str.="<img ";
	}
	$timestr=time();
	if(!empty($imagePath)){ $html_str.=" src='".$imagePath."?$timestr'"; }
	if(!empty($alt)){ $html_str.=" title='".$alt."'"; }
	if(!empty($maxWidth)){ $html_str.=" width='".$newWidth."'"; }
	if(!empty($maxHeight)){ $html_str.=" height='".$newHeight."'"; }
	if(!empty($class)){ $html_str.=" class='".$class."'"; }
	if(!empty($id)){ $html_str.=" id='".$id."'"; }
	if(!empty($name)){ $html_str.=" name='".$name."'"; }
	!empty($url)?$html_str.=" ></a>":$html_str.=" >";
	
	return $html_str;
}
function create_guid() {
	$charid = strtoupper(md5(uniqid(mt_rand(), true)));
	$hyphen = chr(45);// "-"
	$uuid = //chr(123)// "{"
	substr($charid, 0, 8).$hyphen
	.substr($charid, 8, 4).$hyphen
	.substr($charid,12, 4).$hyphen
	.substr($charid,16, 4).$hyphen
	.substr($charid,20,12);
	//.chr(125);// "}"
	return $uuid;
}
/**
   * @param string $string 原文或者密文
   * @param string $operation 操作(ENCODE | DECODE), 默认为 DECODE
   * @param string $key 密钥
    * @param int $expiry 密文有效期, 加密时候有效， 单位 秒，0 为永久有效
    * @return string 处理后的 原文或者 经过 base64_encode 处理后的密文
    *
      * @example
      *
      *  $a = authcode('abc', 'ENCODE', 'key');
      *  $b = authcode($a, 'DECODE', 'key');  // $b(abc)
      *
      *  $a = authcode('abc', 'ENCODE', 'key', 3600);
      *  $b = authcode('abc', 'DECODE', 'key'); // 在一个小时内，$b(abc)，否则 $b 为空
      */
function authcode($string, $operation = 'DECODE', $key = '', $expiry = 3600) {
	$ckey_length = 4;  
	// 随机密钥长度 取值 0-32;
	// 加入随机密钥，可以令密文无任何规律，即便是原文和密钥完全相同，加密结果也会每次不同，增大破解难度。
	// 取值越大，密文变动规律越大，密文变化 = 16 的 $ckey_length 次方
	// 当此值为 0 时，则不产生随机密钥

	$key = md5($key ? $key : EABAX::getAppInf('KEY'));
	$keya = md5(substr($key, 0, 16));
	$keyb = md5(substr($key, 16, 16));
	$keyc = $ckey_length ? ($operation == 'DECODE' ? substr($string, 0, $ckey_length): substr(md5(microtime()), -$ckey_length)) : '';

	$cryptkey = $keya.md5($keya.$keyc);
	$key_length = strlen($cryptkey);

	$string = $operation == 'DECODE' ? base64_decode(substr($string, $ckey_length)) : sprintf('%010d', $expiry ? $expiry + time() : 0).substr(md5($string.$keyb), 0, 16).$string;
	$string_length = strlen($string);

	$result = '';
	$box = range(0, 255);

	$rndkey = array();
	for($i = 0; $i <= 255; $i++) {
	$rndkey[$i] = ord($cryptkey[$i % $key_length]);
	}

	for($j = $i = 0; $i < 256; $i++) {
	$j = ($j + $box[$i] + $rndkey[$i]) % 256;
	$tmp = $box[$i];
	$box[$i] = $box[$j];
	$box[$j] = $tmp;
	}

	for($a = $j = $i = 0; $i < $string_length; $i++) {
	$a = ($a + 1) % 256;
	$j = ($j + $box[$a]) % 256;
	$tmp = $box[$a];
	$box[$a] = $box[$j];
	$box[$j] = $tmp;
	$result .= chr(ord($string[$i]) ^ ($box[($box[$a] + $box[$j]) % 256]));
	}

	if($operation == 'DECODE') {
	if((substr($result, 0, 10) == 0 || substr($result, 0, 10) - time() > 0) && substr($result, 10, 16) == substr(md5(substr($result, 26).$keyb), 0, 16)) {
	return substr($result, 26);
	} else {
	return '';
	}
	} else {
	return $keyc.str_replace('=', '', base64_encode($result));
	}
}
//新建目录
function mkdirs($dir){
if(!is_dir($dir)){
	if(!mkdirs(dirname($dir)))
	return false;
	if(!mkdir($dir,0777))
	return false;
}
return true;
}
//删除目录
function rmdirs($dir){
$d = dir($dir);
while (false !== ($child = $d->read())){
	if($child != '.' && $child != '..'){
		if(is_dir($dir.'/'.$child))
		rmdirs($dir.'/'.$child);
		else
		unlink($dir.'/'.$child);
	}
}
$d->close();
rmdir($dir);
}
//遍历目录文件
function tree($directory){
	$file_str="";
	$mydir=dir($directory);
	//echo "<ul> ";
	while($file=$mydir->read()){
	//if((is_dir("$directory/$file")) AND ($file!=".") AND ($file!="..")){
	//echo "<li><font color=\"#ff00cc\"><b>$file</b></font></li> ";
	//tree("$directory/$file");
	//}
	//else
	//echo "<li><img src=$file></li> ";
	$file_str.=$file."|";
	}
	//echo "</ul> ";
	$mydir->close();
	$file_str = rtrim($file_str, "|");
	$file_str = substr($file_str,5);
	return $file_str;
}
//移动文件
function move_file($name,$spath,$dpath){
	$filename=$spath.$name;
	if (file_exists($filename)){
		$result=rename($filename,$dpath.$name);
		if ($result==false or !file_exists($dpath))
		echo "文件移动失败或目的目录不存在";
		//else
		//echo "文件移动成功";
	}else{
		echo "文件不存在，无法移动";
	}
}
//文件复制
function copy_file($name,$spath,$dpath){
	$filename=$spath.$name;
	if (file_exists($filename)) {
	$handle=fopen($filename,'a');
	copy($filename,$dpath.$name);
	if (file_exists($dpath.$name))
	echo "文件复制成功";
	else echo "文件复制失败";
	}
	else echo "文件不存在";
}
?>