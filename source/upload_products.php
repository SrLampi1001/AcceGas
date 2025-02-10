<?php
$host = "srv1711.hstgr.io"; // Generalmente algo como 'mysql.hostinger.com' o 'localhost'
$usuario = "u976721805_admin";
$contrasena = "1036616747Js";
$base_datos = "u976721805_products";

$conn = new mysqli($host, $usuario, $contrasena, $base_datos);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Opcional: establecer el conjunto de caracteres a UTF-8
$conn->set_charset("utf8");

$sql = "SELECT * FROM products";
$result = $conn->query($sql);

$productos = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $productos[] = $row;
    }
}

// Convertir a JSON y devolver la respuesta
header('Content-Type: application/json');
echo json_encode($productos);

$conn->close();
?>