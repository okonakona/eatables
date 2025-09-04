<?php
require_once __DIR__ . "/config.php";

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


try {
    $db = new PDO(DB_DSN, DB_USER, DB_PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // JSONを受け取る
    $data = json_decode(file_get_contents("php://input"), true);

    $name       = $data["name"] ?? null;
    $category   = $data["category"] ?? null;
    $isPriority = $data["is_priority"] ?? false;
    $message    = $data["message"] ?? "";
    $familyId   = 1; // とりあえず固定

    if (!$name || !$category) {
        throw new Exception("食品名とカテゴリは必須です");
    }

    $exp = $isPriority ? 3 : 1;

    $sql = "INSERT INTO eatables_foods 
            (name, category, is_priority, message, family_id, exp_points) 
            VALUES (:name, :category, :is_priority, :message, :family_id, :exp)";
    $stmt = $db->prepare($sql);
    $stmt->bindValue(":name", $name, PDO::PARAM_STR);
    $stmt->bindValue(":category", $category, PDO::PARAM_STR);
    $stmt->bindValue(":is_priority", $isPriority, PDO::PARAM_BOOL);
    $stmt->bindValue(":exp", $exp, PDO::PARAM_INT);
    $stmt->bindValue(":message", $message, PDO::PARAM_STR);
    $stmt->bindValue(":family_id", $familyId, PDO::PARAM_INT);
    $stmt->execute();

    echo json_encode([
        "status" => "success",
        "message" => "食品を追加しました",
        "food_id" => $db->lastInsertId()
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
