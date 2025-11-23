<?php
session_start();
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'staff') {
    header('Location: admin_login.php');
    exit();
}

// Add member to the DB
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $reg_no = trim($_POST['reg_no']);
    $full_name = trim($_POST['full_name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone_number']);
    $status = trim($_POST['status']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $role = trim($_POST['role']);

    //check for empty fields
    if (empty($reg_no) || empty($full_name) || empty($email) || empty($phone) || empty($status) ||
    empty($username) || empty($password) || empty($role)) {
        echo "All fields are required.";
    } else {
        // Database connection
        //include('../../db_connect.php');
        include('../db_connect.php');

        $stmt = $conn->prepare("INSERT INTO members (reg_no, full_name, email, phone, status, username, password, role) VALUES (?, ?, ?, ?, ?,?,?,?)");
        $stmt->bind_param("ssssssss", $reg_no, $full_name, $email, $phone, $status, $username, $password, $role);

        if ($stmt->execute()) {
            // Correct path if this file is inside 'staff/'
            // header("Location: ../Admin_dashboard.html");
            header("Location: ../staff/Admin_dashboard.html");

            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
        $conn->close();
    }
    
}
?>