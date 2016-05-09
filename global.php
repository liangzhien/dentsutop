<?php
if(!defined('ROOT_PATH')) define('ROOT_PATH',dirname(__FILE__).'/');
date_default_timezone_set('PRC');
//echo ROOT_PATH;
require_once ROOT_PATH.'data/database.inc.php';		//数据库配置文件
require_once ROOT_PATH.'include/mysql.class.php';	//数据库操作类
require_once ROOT_PATH.'include/function.web.php';	//
require_once ROOT_PATH.'include/function.admin.php';	//
/**
 *-----------------------------------------------
 * 数据库连接
 *-----------------------------------------------
 */
$db = new Mysql();
$db->connect(DB_HOST,DB_USER,DB_PWD,DB_NAME,DB_CHARSET,0);

/*
 *-----------------------------------------------
 * 微信APP接口参数
 *-----------------------------------------------
 */
/*
 * 活动接口类
 */
/*require_once 'include/portal.class.php';*/