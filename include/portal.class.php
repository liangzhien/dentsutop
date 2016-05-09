<?php
define('PORTAL_DB_NAME','wx_portal');
define('STATUS_DB_NAME','wx_usrstatus');

class portal {
	private $_portal;
	private $_status;
	private $_wechatobj;

	function portal($WechatObj) {
		$this->_wechatobj = $WechatObj;
		$this->_wechatobj->log('init');
	}

	public function GetUserStatus() {
		global $db;

		$this->_wechatobj->log('in GetUserStatus');
		$result = $db->find('SELECT * FROM '.STATUS_DB_NAME.' WHERE wxid="'.$this->_wechatobj->getRevFrom().'"');
		if ($result) {
			$this->_portal = $db->find('SELECT * FROM '.PORTAL_DB_NAME.' WHERE id='.$result['portalid']);
			if (isset($result['status'])) {
				$this->_status = json_decode($result['status']);
			} else {
				$this->_status = array();
			}
		}
		return $this;
	}

	public function Hook() {
		global $db;
		$this->_wechatobj->log('in hook');
		if ($this->_portal) {
			include_once(ROOT_PATH .$this->_portal['portal']);
			$this->_wechatobj->log('status'.print_r($this->_status, true));
			$result = _portal_hook($this->_wechatobj, $this->_status);
			$this->_wechatobj->log('hook result:'.print_r($result, true));
			/*
			 * $result = ['complete'=> true/false,'continne'=> true/false, 'status'=>mixed, 'reply'=>mixed];
			 * complete 标识用户是否已经完成互动。true，则用户状态会在status 表中被删除；false，则用户状态继续保留.
			 * continue 标识是否需要进行后续的常规操作，如果需要，则返回true；否则返回false
			 * status 中为需要记录到用户状态表中的信息
			 * reply 中为需要回复用户的内容，按照微信接口的定义，可以为 text/image/music/video/news
			 */
			if ($result['complete']) {
				$db->delete(STATUS_DB_NAME, 'wxid="'.$this->_wechatobj->getRevFrom().'"');
			} elseif ($result['status']) {
				$db->update(STATUS_DB_NAME,array('status'=>json_encode($result['status'])),'wxid="'.$this->_wechatobj->getRevFrom().'"');
			}
			return $result;
		} else {
			return false;
		}
	}

	public function Registration($portalid) {
		global $db;

		$this->_wechatobj->log('in Registration');

		$this->_portal = $db->find('SELECT * FROM '.PORTAL_DB_NAME.' WHERE id='.$portalid);
		if ($this->_portal) {
			include_once(ROOT_PATH.$this->_portal['portal']);
			$result = _portal_registration($this->_wechatobj);
			if ($result['complete']) {
				$db->delete(STATUS_DB_NAME, 'wxid='.$this->_wechatobj->getRevFrom());
			} elseif ($result['status']) {
				$value = sprintf(' ("%s",%d,\'%s\',NOW())', $this->_wechatobj->getRevFrom(), $portalid, json_encode($result['status']));
				$db->query('INSERT INTO '.STATUS_DB_NAME.' VALUES'.$value.' ON DUPLICATE KEY UPDATE portalid='.$portalid.',status=\''.json_encode($result['status']).'\',updatetime=NOW()');
				$rs = $db->find("select * from hy_usrstatus WHERE wxid='".$this->_wechatobj->getRevFrom()."' and portalid=$portalid");
				if(!$rs){
					$record = array(
						'wxid'=>$this->_wechatobj->getRevFrom(),
						'portalid'=>$portalid
					);
					$db->save('hy_usrstatus',$record);
				}else{
					$db->query("UPDATE  `wx_zss`.`hy_usrstatus` SET  `hots` =  `hots`+1 WHERE  `hy_usrstatus`.`wxid` =  '".$this->_wechatobj->getRevFrom()."' LIMIT 1 ;");
				}
				/*$value2 = sprintf(' ("%s",%d,%d,NOW())', $this->_wechatobj->getRevFrom(), $portalid,1 ));
				$db->query('INSERT INTO hy_usrstatus VALUES'.$value2.' ON DUPLICATE KEY UPDATE portalid='.$portalid.',hots=hots+1,updatetime=NOW()');*/
			}
			return $result['reply'];
		} else {
			return false;
		}

	}
}