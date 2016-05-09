<?php
	 $type = strip_tags(trim($_REQUEST['act']));
	// $str = '{"result": "0", "msg": "错误信息"}';
	 switch ($type) {
		case "save":
			$str = '{"result": "0", "msg":"错误信息", "id":"作品id", "url":"images/game/1/5.png", "userInfo":"1"}';
			break;
		case "saveInfo":
			$str = '{"result": "0", "msg":"错误信息"}';
			break;		
		case "info":
			$str = '	{"result": "0", "msg":"错误信息", "self":"1","nickname":"恩恩","picurl":"images/tem/1.png", "url":"images/game/1/5.png", "fen":"2000", "topfen":"30000"}';
			break;		
		case "draw":
			$str = '{"result": "0", "msg":"错误信息"}';
			break;								
	 }
 	 echo $str;
?>