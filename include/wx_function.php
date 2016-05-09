<?php

define('KEYWORD_DB_NAME', 'wx_keyword');
define('AUTOREPLY_DB_NAME', 'wx_autoreply');

function wx_keymatch($key) {
	global $db;
	global $WechatObj;
	global $PortalObj;
	$WechatObj->log('in wx_keymatch==>'.$key);
	$result = $db->find('SELECT * FROM '.KEYWORD_DB_NAME.' WHERE keyword="'.$key.'"');
	$WechatObj->log(print_r($result,true));
	if ($result) {
		switch ($result['type']) {
			case 1 :
				// 正常的关键字回复，按照自动回复内容
				$autoreply = $db->find('SELECT * FROM '.AUTOREPLY_DB_NAME.' WHERE id='.$result['autoreply_id']);
				if ($autoreply) {
					$reply = json_decode($autoreply['msg']);
					$replycontent = array(
						'MsgType'=> $autoreply['msgtype'],
						'CreateTime' => $autoreply['updatetime']
					);
				}
				break;
			case 2 :
				// 活动入口
				$reply = $PortalObj->Registration($result['portalid']);
				$replycontent = array(
					'MsgType'=> $reply['msgtype'],
					'CreateTime' => time()
				);
				$WechatObj->log(print_r($replycontent, true));
				break;
		}

		$replycontent = $WechatObj->generatereply($reply, $replycontent);
		return $replycontent;
	}
}
