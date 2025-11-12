<?php
// db_connection parameters
$host = "localhost";
$user = "root"; // default user for xampp
$password = ""; //Leave empty unless you have set a password
$db = "library_db";

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error){
    die("connection failed: " .$conn->connect_error);
}
?>
