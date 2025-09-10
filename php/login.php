<?php
require_once __DIR__ . "/config.php";

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

try {
    $db = new PDO(DB_DSN, DB_USER, DB_PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (!$email || !$password) {
        throw new Exception("メールアドレスとパスワードが必要です");
    }

    $stmt = $db->prepare("SELECT * FROM eatables_users WHERE email = :email AND delete_flag = 0 LIMIT 1");
    $stmt->bindValue(":email", $email, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && $password === $user['password']) {
        echo json_encode([
            "status" => "success",
            "user" => [
                "id" => $user["id"],
                "name" => $user["name"],
                "role" => $user["role"],
                "family_id" => $user["family_id"],
                "level" => $user["level"],
                "experience" => $user["experience"],
            ]
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "メールアドレスまたはパスワードが違います"
        ]);
    }

} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
