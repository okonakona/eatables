<?php
require_once __DIR__ . "/config.php";

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

// デバッグ用ログ
$raw = file_get_contents('php://input');
error_log("raw input: " . $raw);

$input = json_decode($raw, true);
error_log("decoded input: " . print_r($input, true));

$food_id = $input['food_id'] ?? null;
$rating  = $input['rating'] ?? null;

try {
    if ($food_id === null || $rating === null) {
        throw new Exception("food_idとratingが必要です");
    }
    
    $db = new PDO(DB_DSN, DB_USER, DB_PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->beginTransaction();

    $stmt1 = $db->prepare("UPDATE eatables_foods SET delete_flag = 1 WHERE id = :food_id");
    $stmt1->bindValue(":food_id", $food_id, PDO::PARAM_INT);
    $stmt1->execute();

    $stmt2 = $db->prepare("INSERT INTO eatables_eaten_history (food_id, rating) VALUES (:food_id, :rating)");
    $stmt2->bindValue(":food_id", $food_id, PDO::PARAM_INT);
    $stmt2->bindValue(":rating", $rating, PDO::PARAM_INT);
    $stmt2->execute();

    $db->commit();

    echo json_encode([
        "status" => "success",
        "message" => "食べた報告を登録しました"
    ]);

} catch (Exception $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
