<?php
session_start();
ob_start();
include_once( 'global.php' );
ob_end_clean();
$act = strip_tags(trim($_REQUEST['act']));
$act_arr = explode('_',$act);
$date = date('Y-m-d');
$uid = $_SESSION['sns_uid'];
//测试
//$uid = 1;
switch ($act) {
	case "save":
		/*if(time()>=1458532800){
			return_msg(array('result'=>40004,'msg'=>'活动已经结束'));
		}*/
		if($uid > 0){
			$encodedData = strip_tags(trim($_REQUEST['data']));
			if($encodedData){
				$encodedData = str_replace(' ','+',$encodedData);
				$encodedData = preg_replace('/^data:image\/(png|jpeg|gif);base64,/','',$encodedData);
				$data = base64_decode($encodedData);
				$saveFlieName = uniqid();
				$img=$saveFlieName.'.jpg';
				require_once('include/upyun.class.php');
				$upyun = new UpYun('cbuxm','enen','enen1234');
				$rsp = $upyun->writeFile('/uploadfile/'.$img, $data, true);  
				$me = $db->find("select nickname2,headimgurl,source from usr_general where id=$uid");
				$record = array(
					'uid' => $uid,
					'url' => $img,
					'nickname' => $me['nickname2'],
					'headimgurl' => $me['headimgurl'],
					'ip' => get_client_ip()
				);
				$id = $db->save('usr_draw_log',$record);
				$isInfo = $db->find("select id from usr_info_xm where uid=$uid");
				$userInfo = $isInfo ? 1 : 0;
				return_msg(array('result'=>0,'msg'=>'成功','id'=>$id,'url'=>'http://cbuxm.b0.upaiyun.com/uploadfile/'.$img,'userInfo'=>$userInfo));
			}
			return_msg(array('result'=>40002,'msg'=>'参数错误'));
		}
		return_msg(array('result'=>40001,'msg'=>'未登录'));
	break;
	case "saveInfo":
		if($uid > 0){
			$realname = strip_tags(trim($_REQUEST['realname']));
			$phone = strip_tags(trim($_REQUEST['phone']));
			if($phone && $realname){
				$record = array(
					'uid' => $uid,
					'realname' => $realname,
					'phone' => $phone,
					'ip' => get_client_ip()
				);
				$db->save('usr_info_xm',$record);
				return_msg(array('result'=>0,'msg'=>'保存成功'));
			}
			return_msg(array('result'=>40002,'msg'=>'参数错误'));
		}
		return_msg(array('result'=>40001,'msg'=>'未登录'));
	break;
	case "draw":
		if($uid > 0){
			$id = strip_tags(trim($_REQUEST['id']));
			$fen = strip_tags(trim($_REQUEST['fen']));
			$fenArr = array(0,100,200,300);
			if($id && $fen>0 && $fen<4){
				$info  = $db->find("select * from usr_draw_log where id=$id");
				if($info){
					if($info['uid'] == $uid){
						return_msg(array('result'=>40005,'msg'=>'你不可以竞拍自己的作品'));
					}
					$count = $db->getRowsNum("select id from usr_pai_log where uid=$uid and cd='$date'");
					if($count>=3){
						return_msg(array('result'=>40004,'msg'=>'你今天的次数已经用完'));
					}
					$countFen = $db->getOneField("select sum(fen) from usr_pai_log where uid=$uid");
					if($countFen+$fenArr[$fen] >= 1000){
						return_msg(array('result'=>40003,'msg'=>'你的钱不够了'));
					}
					$record = array(
						'uid' => $uid,
						'did' => $id,
						'fen' => $fenArr[$fen],
						'cd' => $date,
						'ip' => get_client_ip()
					);
					$db->save('usr_pai_log',$record);
					$db->query("UPDATE `usr_general` SET  `fen` = `fen`-$fenArr[$fen] WHERE `id` =$uid");
					$db->query("UPDATE `usr_draw_log` SET  `fen` = `fen`+$fenArr[$fen] WHERE `id` =$id");
					return_msg(array('result'=>0,'msg'=>'竞拍成功'));
				}
			}
			return_msg(array('result'=>40002,'msg'=>'参数错误'));
		}
		return_msg(array('result'=>40001,'msg'=>'未登录'));
	break;
	case "info":
		if($uid > 0){
			$id = strip_tags(trim($_REQUEST['id']));
			if($id){
				$rs = $db->find("select * from usr_draw_log where id=$id");
				if($rs){
					$self = $rs['uid'] == $uid ?  1 : 0;
					$topfen = $db->getOneField("select fen from usr_draw_log order by fen desc limit 1");
					$selffen = $db->getOneField("select fen from usr_general where id=$uid");
					$drawcount = $db->getRowsNum("select id from usr_pai_log where did=$id");
					return_msg(array('result'=>0,'msg'=>'成功','self'=>$self,'nickname'=>base64_decode($rs['nickname']),'picurl'=>$rs['headimgurl'],'url'=>'http://cbuxm.b0.upaiyun.com/uploadfile/'.$rs['url'],'fen'=>$rs['fen'],'topfen'=>$topfen,'selffen'=>$selffen,'drawcount'=>$drawcount));
				}
			}
			return_msg(array('result'=>40002,'msg'=>'参数错误'));
		}
		return_msg(array('result'=>40001,'msg'=>'未登录'));
	break;
	break;
	case "setUid":
		$_SESSION['sns_uid'] = strip_tags(trim($_REQUEST['uid']));
		echo $_SESSION['sns_uid'];
	break;
}
?>