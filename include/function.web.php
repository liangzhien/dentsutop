<?php
/**
 * 前台公用函数库
 * @author:	
 */
//保存用户资料
function user_save($openid,$user_info){
	global $db;
	$rs = $db->find("select id from usr_general where openid='$openid'");
	$uid = $rs['id'];
	if ($user_info){
		$user_info['privilege'] = json_encode($user_info['privilege']);
		$user_info['nickname2'] = base64_encode($user_info['nickname']);
		session_start();
		if ($uid>0){	//更新
			unset($user_info['openid']);
			$db->update('usr_general',$user_info,'id='.$uid);
		}else{
			if($_SESSION['source']){
				$user_info['source'] = $_SESSION['source'];
			}
			$uid = $db->save('usr_general',$user_info);
		}
		$_SESSION['sns_uid'] = $uid;
		return $uid;
	}else{
		if($uid){
			$_SESSION['sns_uid'] = $uid;
		}
	}
}

//数组乱序排列
/*function rand_array($arr){
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
} */
function getArticleList($sql,$str=""){
	global $db;
	global $pageList;
	$page = !empty($_REQUEST['page']) ? intval($_REQUEST['page']) : 0;
	$curpage = empty($page)?0:($page-1);
	
	//定义默认数据
	$init_array =array(
		'row'		=>10,
		'limit'		=>''
	);
	//用获取的数据覆盖默认数据
	$str_array = explode('|',$str);
	foreach($str_array as $_str_item){
		if(!empty($_str_item)){
			$_str_item_array = explode('=',$_str_item);
			if(!empty($_str_item_array[0])&&!empty($_str_item_array[1])){
				$init_array[$_str_item_array[0]]=$_str_item_array[1];
			}
		}
	}
	//setstrArray($str);
	//定义要用到的变量
	$row		 = $init_array['row'];
	$limit	 	 = $init_array['limit'];
	
	$pageList['pagination_total_number']	= $db->getRowsNum($sql);
	$pageList['pagination_perpage'] 		= empty($row)?$pageList['pagination_total_number']:$row;
	
	if(!empty($limit))
	return $db->selectLimit($sql,$pageList['pagination_perpage'],$limit);
	else
	return $db->selectLimit($sql,$pageList['pagination_perpage'],$curpage*$row);
}
/**
 * 分页函数
 * @param $name 分页名称
 * @param $page_url 分页URL
 * @param $page 	页码显示数
 */
function getPaginationDiv($page_name,$div_name,$page_url,$page = 8) {
	global $pageList;
	$name="javascript:goPage('$page_name','$div_name',";
	//当前第几页
	$curpage = empty($_GET['page'])?1:$_GET['page'];
	$realpages = 1;									
	if($pageList['pagination_total_number'] > $pageList['pagination_perpage']) {//需要分页
		$offset = 2;
		//实际总分页数
		$realpages = @ceil($pageList['pagination_total_number'] / $pageList['pagination_perpage']);
		$pages = $realpages;
		if($page > $pages) {
			$from = 1;
			$to = $pages;
		} else {
			$from = $curpage - $offset;
			$to = $from + $page - 1;
			if($from < 1) {
				$to = $curpage + 1 - $from;
				$from = 1;
				if($to - $from < $page) {
					$to = $page;
				}
			} elseif($to > $pages) {
				$from = $pages - $page + 1;
				$to = $pages;
			}
		}
		
		$phpaa_page = '';
		$page_url .= strpos($page_url, '?') ? '&amp;' : '?';
		$phpaa_page = ($curpage - $offset > 1 && $pages > $page ? "<a href=".$name.(1)."); class='page'>|<<</a> " : '|<< ').
			($curpage > 1? "<a href=".$name.($curpage - 1)."); class='page'>上一页</a> " : '上一页 ');
		for($i = $from; $i <= $to; $i++) {
			$phpaa_page .= $i == $curpage ? '<strong style="color:#ff0000">'.$i.'</strong> ' :
				//'<a href="'.$page_url.'page='.$i.($i == $pages ? '#' : '').'">'.$i.'</a> ';
				"<a href=".$name.$i.($i == $pages ? "" : "").");>".$i."</a> ";
		}
		$phpaa_page .= ($to < $pages ? "<a href=".$name.($pages)."); class='page'>...".$pages."</a> ": '');
		$phpaa_page .= ($curpage < $pages ? "<a href=".$name.($curpage + 1)."); class='page'>下一页</a> " : ' 下一页');
		$phpaa_page .= ($to < $pages ? "<a href=".$name.($pages)."); class='page'>>>|</a> ": ' >>|');
		$phpaa_page = $phpaa_page ? '<div class="page">共&nbsp;'.$pageList['pagination_total_number'].'&nbsp;条 '.$phpaa_page.'</div>' : '';
	}
	return $phpaa_page;
}

/**
 * 分页函数
 * @param $page_url 分页URL
 * @param $page 	页码显示数
 */
function getPagination($page_url,$page = 8) {
	global $pageList;
	//当前第几页
	$curpage = empty($_GET['page'])?1:$_GET['page'];
	$realpages = 1;									
	if($pageList['pagination_total_number'] > $pageList['pagination_perpage']) {//需要分页
		$offset = 2;
		//实际总分页数
		$realpages = @ceil($pageList['pagination_total_number'] / $pageList['pagination_perpage']);
		$pages = $realpages;
		if($page > $pages) {
			$from = 1;
			$to = $pages;
		} else {
			$from = $curpage - $offset;
			$to = $from + $page - 1;
			if($from < 1) {
				$to = $curpage + 1 - $from;
				$from = 1;
				if($to - $from < $page) {
					$to = $page;
				}
			} elseif($to > $pages) {
				$from = $pages - $page + 1;
				$to = $pages;
			}
		}
		
		$phpaa_page = '';
		$page_url .= strpos($page_url, '?') ? '&amp;' : '?';
		$phpaa_page = ($curpage - $offset > 1 && $pages > $page ? '<a href="'.$page_url.'page=1#list" class="first">首页</a> ' : '').
			($curpage > 1? '<a href="'.$page_url.'page='.($curpage - 1).'#list" class="prev">上一页</a> ' : '');
		for($i = $from; $i <= $to; $i++) {
			$phpaa_page .= $i == $curpage ? '<strong style="color:#cc0000">'.$i.'</strong> ' :
				//'<a href="'.$page_url.'page='.$i.($i == $pages ? '#' : '').'">'.$i.'</a> ';
				'<a href="'.$page_url.'page='.$i.($i == $pages ? '' : '').'#list">'.$i.'</a> ';
		}
		$phpaa_page .= ($to < $pages ? '<a href="'.$page_url.'page='.$pages.'#list" class="last">...'.$pages.'</a> ': '');
		$phpaa_page .= ($curpage < $pages ? '<a href="'.$page_url.'page='.($curpage + 1).'#list" class="next">下一页</a> ' : '');
		$phpaa_page .= ($to < $pages ? '<a href="'.$page_url.'page='.$pages.'#list" class="last">尾页</a> ': '');
		$phpaa_page = $phpaa_page ? '<div class="pages">共&nbsp;'.$pageList['pagination_total_number'].'&nbsp;条 '.$phpaa_page.'</div>' : '';
	}
	return $phpaa_page;
}

//返回提示内容
//结果，说明，格式

function return_msg($array=NULL,$format='json'){
	if ($format=='xml'){
		echo "<data>";
		foreach($array as $key=>$value){
			echo "<$key>$value</$key>";
		}
		echo "</data>";
	}else{
		echo json_encode($array);
	}
	exit;
}
/**
 * GET 请求
 * @param string $url
 */
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
	
/**
 * POST 请求
 * @param string $url
 * @param array $param
 * @return string content
 */
function http_post($url,$param){
	$oCurl = curl_init();
	if(stripos($url,"https://")!==FALSE){
		curl_setopt($oCurl, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($oCurl, CURLOPT_SSL_VERIFYHOST, false);
	}
	if (is_string($param)) {
		$strPOST = $param;
	} else {
		$aPOST = array();
		foreach($param as $key=>$val){
			$aPOST[] = $key."=".urlencode($val);
		}
		$strPOST =  join("&", $aPOST);
	}
	curl_setopt($oCurl, CURLOPT_URL, $url);
	curl_setopt($oCurl, CURLOPT_RETURNTRANSFER, 1 );
	curl_setopt($oCurl, CURLOPT_POST,true);
	curl_setopt($oCurl, CURLOPT_POSTFIELDS,$strPOST);
	$sContent = curl_exec($oCurl);
	$aStatus = curl_getinfo($oCurl);
	curl_close($oCurl);
	if(intval($aStatus["http_code"])==200){
		return $sContent;
	}else{
		return false;
	}
}
function http_request($url, $data = null){
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
	if (!empty($data)){
		curl_setopt($curl, CURLOPT_POST, 1);
		curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	}
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	$output = curl_exec($curl);
	curl_close($curl);
	return $output;
}
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
function utf8ToGBK ($value) { 
	//return iconv("UTF-8", "gbk", $value); 
	return mb_convert_encoding($value, "GBK", "UTF-8"); 
}
?>