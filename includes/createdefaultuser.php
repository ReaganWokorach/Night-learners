<?php
include ('../db_connect.php');// your database connection

$username = "ERIAS";
$password = "1234";
$role = "yes";

// Hash the password securely
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Prepare the insert query
$stmt = $conn->prepare("INSERT INTO staff (username, password, role) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $hashedPassword, $role);

if ($stmt->execute()) {
    echo "User added successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
