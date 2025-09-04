<?php
// config.php
// 設定関係の定数を定義するファイル

// サイトの名前
const SITE_NAME = "PHP1";


// DB関連
const DB_DRIVER = "mysql";
const DB_NAME = "eatables";
const DB_HOST = "mysql_container";
const DB_CHAR = "utf8mb4";
const DB_USER = "root";
const DB_PASS = "rootpass";
const DB_DSN = DB_DRIVER .":dbname=". DB_NAME .";host=". DB_HOST .";charset=". DB_CHAR;



?>