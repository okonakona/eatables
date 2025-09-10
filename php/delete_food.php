<?php
require_once __DIR__ . "/config.php"; 

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

try {
    $db = new PDO(DB_DSN, DB_USER, DB_PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $input = json_decode(file_get_contents("php://input"), true);
    $food_id = $input['food_id'] ?? null;

    if (!$food_id) {
        throw new Exception("food_id が必要です");
    }

    $stmt = $db->prepare("UPDATE eatables_foods SET delete_flag = 1 WHERE id = :id");
    $stmt->bindValue(":id", $food_id, PDO::PARAM_INT);
    $stmt->execute();

    echo json_encode([
        "status" => "success",
        "message" => "アイテムを削除しました"
    ]);

} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
