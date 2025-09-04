<?php

require_once __DIR__ . "/config.php";

// 
// h
// htmlspecialcharsでデータを変換する
// 

function h( ?string $data ):string {
    return htmlspecialchars($data, ENT_QUOTES);
}

// 
// redirect
// header( "Location" )で、リダイレクト処理
// 
function redirect( string $to ){
    header( "Location: $to" );
    exit;
}


?>