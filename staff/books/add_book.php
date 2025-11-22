<?php
session_start();
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'staff') {
    header('Location: admin_login.php');
    exit();
}

// Add books to the DB
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = trim($_POST['title']);
    $author = trim($_POST['author']);
    $isbn = trim($_POST['isbn']);
    $category = trim($_POST['category']);
    $copies = intval($_POST['copies']);

    if (empty($title) || empty($author) || empty($isbn) || empty($category) || $copies <= 0) {
        echo "All fields are required and number of copies must be greater than zero.";
    } else {
        include('../../db_connect.php');

        $stmt = $conn->prepare("INSERT INTO books (isbn, title, author, category, copies_total, copies_available) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssii", $isbn, $title, $author, $category, $copies, $copies);

        if ($stmt->execute()) {
            // Correct path if this file is inside 'staff/'
            header("Location: ../Admin_dashboard.html");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
        $conn->close();
    }
}
?>