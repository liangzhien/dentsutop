<?php
/*
* ���������ļ�
*/
// endroy: 20110730 remove below line 'cos it should not be included here.
// header('Content-Type: text/html; charset=GB2312');
// endroy: ends

if(!defined('ROOT_PATH')) define('ROOT_PATH',dirname(dirname(__FILE__)).'/');

						
require_once ROOT_PATH.'data/database.inc.php';		//��ݿ������ļ�
require_once ROOT_PATH.'include/mysql.class.php';	//��ݿ������
require_once ROOT_PATH.'include/functions.php';		//����������

/**
 *-----------------------------------------------
 * ��ݿ�����
 *-----------------------------------------------
 */
$db = new Mysql();
$db->connect(DB_HOST,DB_USER,DB_PWD,DB_NAME,DB_CHARSET,0);
//$db->debug();

/*��ֹ PHP 5.1.x ʹ��ʱ�亯���*/
if(function_exists('date_default_timezone_set')) date_default_timezone_set('PRC');

foreach(array('_COOKIE', '_POST', '_GET') as $_request) {
  if ($$_request){
	foreach($$_request as $_key => $_value) {
		$_key{0} != '_' && $$_key = daddslashes($_value);
	}
  }
}
unset($_request, $_key, $_value);

function daddslashes($string, $force = 0) {
	!defined('MAGIC_QUOTES_GPC') && define('MAGIC_QUOTES_GPC', get_magic_quotes_gpc());
	if(!MAGIC_QUOTES_GPC || $force) {
		if(is_array($string)) {
			foreach($string as $key => $val) {
				$string[$key] = daddslashes($val, $force);
			}
		} else {
			$string = addslashes($string);
		}
	}
	return $string;
}
require_once ROOT_PATH.'data/website.inc.php';	
?>