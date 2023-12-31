<?php

$host = "localhost";
$dbname = "login_db";
$username = "root";
$password = "";

$sql = new mysql($host, $username, $password, $dbname);

if ($sql->connect_errno) {
    die("Connection error: " . $sql->connect_error);
}

return $sql;