<?php
//authentication of the sessions ==== aditional dashbaord protection
session_start();

if (!isset($_SESSION['staff_id'])) {
    header("Location: ../login.php");
    exit();
}
?>
