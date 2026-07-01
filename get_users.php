<?php
include 'config.php';

$sql = "SELECT COUNT(*) as total FROM users";
$result = $conn->query($sql);

$row = $result->fetch_assoc();

echo $row['total'];

$conn->close();
?>