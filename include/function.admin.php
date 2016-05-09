<?php 
/**
 * 后台公用函数库
 */

/**
 * 分页函数
 *
 * @param int $num	
 * @param int $perpage
 * @param int $curpage
 * @param string $mpurl
 * @param int $maxpages
 * @param int $page
 * @param bool $autogoto
 * @param bool $simple
 * @return string
 */
function multi($num, $perpage, $curpage, $mpurl, $maxpages = 0, $page = 10, $autogoto = TRUE, $simple = FALSE) {
	global $maxpage;
		$shownum = $showkbd = true;
		$lang['prev'] = '上一页';
		$lang['next'] = '下一页';

	$multipage = '';
	$mpurl .= strpos($mpurl, '?') ? '&amp;' : '?';
	$realpages = 1;									
	if($num > $perpage) {
		$offset = 2;

		$realpages = @ceil($num / $perpage);
		$pages = $maxpages && $maxpages < $realpages ? $maxpages : $realpages;

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

		$multipage = ($curpage - $offset > 1 && $pages > $page ? '<a href="'.$mpurl.'page=1" class="first">首页</a> ' : '').
			($curpage > 1 && !$simple ? '<a href="'.$mpurl.'page='.($curpage - 1).'" class="prev">'.$lang['prev'].'</a> ' : '');	
		
		for($i = $from; $i <= $to; $i++) {
			$multipage .= $i == $curpage ? '<strong><font style="color:#ff0000">'.$i.'</font></strong> &nbsp;&nbsp;' :
				'<a href="'.$mpurl.'page='.$i.($i == $pages && $autogoto ? '' : '').'">'.$i.'</a> &nbsp;&nbsp;';
		}

		$multipage .= ($to < $pages ? '. . .&nbsp;&nbsp;<a href="'.$mpurl.'page='.$pages.'" class="last">'.$realpages.'</a> ': '').
			($curpage < $pages && !$simple ? '&nbsp;&nbsp;<a href="'.$mpurl.'page='.($curpage + 1).'" class="next">'.$lang['next'].'</a> ' : '').
			($showkbd && !$simple && $pages > $page ? '<kbd><input type="text" name="custompage" size="3" style="height:20px;font-size:12px" onkeydown="if(event.keyCode==13) {window.location=\''.$mpurl.'page=\'+this.value; return false;}" /><input type="button"  style="height:22px;font-size:12px" value="转到" onclick="window.location=\''.$mpurl.'page=\'+document.all(\'custompage\').value; return false;"></kbd>' : '');

		$multipage = $multipage ? '<div class="pages">'.($shownum && !$simple ? '共&nbsp;<font style="color:#ff0000">'.$num.'</font>&nbsp;条 ' : '').$multipage.'</div>' : '';
	}
	$maxpage = $realpages;
	return $multipage;
}

/**
 * 栏目分类下拉框 <option></option>
 *
 * @param int $pid
 * @param int $id
 * @param int $level
 */
function getCategorySelect($db_con,$select_id=0,$id = 0,$level = 0){
	global $db;
	$category_arr = $db->findAll ( "select * from $db_con where pid = " . $id . " order by seq" );
	for($lev = 0; $lev < $level * 2 - 1; $lev ++) {
		$level_nbsp .= "　";
	}
	if ($level++) $level_nbsp .= "┝";
	foreach ( $category_arr as $category ) {
		$id = $category ['id'];
		$name = $category ['name'];
		$province = $category ['province'];
		$city = $category ['city'];
		$selected = $select_id==$id?'selected':'';
		if ($city)
		echo "<option value=\"".$id."\" ".$selected.">".$level_nbsp . " " . $province. " " . $city. " " . $name."</option>\n";
		else
		echo "<option value=\"".$id."\" ".$selected.">".$level_nbsp . " " . $name."</option>\n";
		getCategorySelect ($db_con,$select_id, $id, $level );
	}
}

/***********************************
			图片上传函数
***********************************/
// @param string $filename	input名
// @param string $path		路径
// @param string $newfilename		新文件名		
function uploadFile($filename,$path='',$newfilename=''){
	global $db;
	global $config;
	//$attachment_dir = $config['attachment_dir'].date('Ym')."/";
	$dest_dir='../'.$config['attachmentDir'].'/'.$path;
	$attachment_dir = $dest_dir;
	!is_dir($attachment_dir)&&mkdir($attachment_dir);	
	$AllowedExtensions = array('bmp','gif','jpeg','jpg','png','swf','flv','mp4','zip');
	$Extensions = end(explode(".",$_FILES[$filename]['name']));
	
	if(!in_array(strtolower($Extensions),$AllowedExtensions)){
		exit("<script>alert('缩略图格式错误！只支持后缀名为bmp,gif,jpeg,jpg,png 的文件');window.history.go(-1)</script>");
	}
	if ($newfilename)
	$file_name = $newfilename;
	else
	$file_name = date('YmdHis').'_'.rand(10,99).'.'.$Extensions;
	$upload_file = $attachment_dir.$file_name;
	$upload_absolute_file = $upload_file;
	if (move_uploaded_file($_FILES[$filename]['tmp_name'], $upload_absolute_file)) {
		/*
		$record = array(
			'name'			=>$file_name,
			//'ffilename'			=>$_FILES [$filename]['name'],
			'path'				=>$upload_file,
			'ext'				=>$Extensions,
			'size'				=>$_FILES [$filename]['size'],
			'addtime'		=>date("Y-m-d H:i:s")			
		);
		$id = $db->save('hy_file',$record);
		*/
		return $file_name;
	}
}
/**
 * 显示预览图 
 *
 * @param string $name
 * @param string $picpath
 * @param int $id
 * @param int $width
 * @param int $height
 * @return string
 */
function previewPic($name,$picpath,$id,$width=100,$height){
	if (!$height){$height=$width;}
	$divname=$name."DIV";
	$divname_s=$name."DIVs";
	$str="";
	$str.="<div id='".$divname."'>";
	if(!empty($picpath)){
	$str.="<img src='..".$picpath."' width='".$width."' height='".$height."' onMouseOver=document.getElementById('".$divname_s."').style.display='' onMouseOut=document.getElementById('".$divname_s."').style.display='none'>";
	$str.="<div id='".$divname_s."' style='display:none; position:absolute;'><img src='..".$picpath."'></div>";
	$str.="<font style='cursor:pointer; font-size:12px' onclick=doAction('delpic','".$id."','".$name."','".$divname."');>删除图片</font>";
	}
	$str.="</div>";
	return $str; 
}
function isFun($dbName,$fieldName,$value,$id){
	if ($value)
	echo "<a href=javascript:updateIsFun('".$dbName."','".$fieldName."=0','".$id."');><img src='images/check_right.gif' width='13' height='13' border='0' alt='点击不通过'></a>";
	else
	echo "<a href=javascript:updateIsFun('".$dbName."','".$fieldName."=1','".$id."');><img src='images/check_error.gif' width='13' height='13' border='0' alt='点击通过'></a>";
}
/**
* 通用列表
*/
function admin_get_rslist($db_con,$str=""){
	global $db;
	global $pageList;
	$page = !empty($_REQUEST['page']) ? intval($_REQUEST['page']) : 0;
	$curpage = empty($page)?0:($page-1);
	
	//定义默认数据
	$init_array =array(
		'keywords'	=>'',
		'keywordstype'	=>'',
		'type'		=>'',
		'row'		=>10,
		'order'		=>'id',
		'orderway'	=>'desc',
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
	//定义要用到的变量
	$keywords		 = $init_array['keywords'];
	$keywordstype	 = $init_array['keywordstype'];
	$type		 = $init_array['type'];
	$row		 = $init_array['row'];
	$order		 = $init_array['order'];
	$orderway	 = $init_array['orderway'];
	$limit	 	 = $init_array['limit'];
	
	
	$where="id>0";
	if($id)
	$where.=" && id=".$id;
	if($type)
	$where.=" && type=".$type;
	if($keywords){
		if ($keywordstype=='addtime' || $keywordstype=='title' || $keywordstype=='phone' || $keywordstype=='content' || $keywordstype=='info' || $keywordstype=='reply')
		$where.=" && ($keywordstype like '%".$keywords."%')";
		else
		$where.=" && ($keywordstype like '".$keywords."')";
	}
	$sql = "select * from $db_con where ".$where." order by ".$order." ".$orderway;
	$pageList['pagination_total_number']	= $db->getRowsNum($sql);
	$pageList['pagination_perpage'] 		= empty($row)?$pageList['pagination_total_number']:$row;

	if(!empty($limit))
	return $db->selectLimit($sql,$pageList['pagination_perpage'],$limit);
	else
	return $db->selectLimit($sql,$pageList['pagination_perpage'],$curpage*$row);
}
/**
* 获取GET连接的字符串
* 
* @return string $str 过滤后的字符串
*/
function get_url_str(){
	$str = trim(urldecode($_SERVER['QUERY_STRING'])); //取GET字符串
	$str = str_replace(" ","",$str);	//清除空格

	$str_arr = explode('&page',$str); //过滤页码page
	$str=$str_arr[0];
	return $str;
}
?>