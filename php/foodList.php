<?php 
    
    // 外部ファイル読み込み
    require_once __DIR__ . "/utility.php";

    try{
    // DBへの接続(config.phpで定数化)
    $db = new PDO(DB_DSN,DB_USER,DB_PASS);

    // SQLの準備
    $sql = "SELECT * FROM eatables_foods WHERE delete_flag = 0";

    // SQLの実行
    $stmt = $db -> query($sql);

    $rows =[];
    while($row = $stmt -> fetch( PDO::FETCH_ASSOC )){
        $row["is_priority"] = (bool)$row["is_priority"];
        $rows[] = $row;
    }

    header("Content-Type: application/json; charset=utf-8");
    
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");    

    echo json_encode($rows);

} catch (PDOException $error) {
    print $error->getMessage();
}
    

?>