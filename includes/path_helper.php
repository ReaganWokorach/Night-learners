<?php
function base_url($path = '') {
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://";
    $host = $_SERVER['HTTP_HOST'];
    $root = '/Night-learners/'; // <— match the folder name exactly
    return $protocol . $host . $root . ltrim($path, '/');
}
?>
