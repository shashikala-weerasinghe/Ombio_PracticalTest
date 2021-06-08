<?php


$link = mysqli_connect('localhost', 'root', '', 'Exam', '3307');
$users = "";
$sql = "select * from user";
$stmt = mysqli_prepare($link, $sql);
mysqli_stmt_execute($stmt);
mysqli_stmt_store_result($stmt);
mysqli_stmt_bind_result($stmt, $users);
return $users;



?>