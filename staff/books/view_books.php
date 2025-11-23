<?php
session_start();
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'staff') {
    http_response_code(403);
    echo json_encode(['error' => 'Unauthorized']);
    exit();
}

include('../../db_connect.php'); // adjust path if needed

$result = $conn->query("SELECT id, isbn, title, author, category, copies_total, copies_available, created_at FROM books ORDER BY id ASC");

$books = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $books[] = $row;
    }
}

$conn->close();

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($books);
?>
