<?php 

    // 外部ファイル読み込み
    require_once __DIR__ . "/utility.php";

    try{
    // DBへの接続(config.phpで定数化)
    $db = new PDO(DB_DSN,DB_USER,DB_PASS);

    // SQLの準備
    $sql = "SELECT * FROM eatables_users";

    // SQLの実行
    $stmt = $db -> query($sql);

    $rows =[];
    while($row = $stmt -> fetch( PDO::FETCH_ASSOC )){
        $rows[] = $row;
    }

    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($rows);

} catch (PDOException $error) {
    print $error->getMessage();
}
    

?>