<?php
session_start();
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'staff') {
    http_response_code(403);
    echo json_encode(['error' => 'Unauthorized']);
    exit();
}

include('../db_connect.php'); // adjust path if needed

$result = $conn->query("SELECT member_id, reg_no, full_name, email, phone, status, created_at FROM members ORDER BY member_id DESC");

$members = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $members[] = $row;
    }
}

$conn->close();

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($members);
?>
