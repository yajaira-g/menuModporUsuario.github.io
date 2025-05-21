<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = file_get_contents('php://input');
    file_put_contents('menu.json', $jsonData);
    header('Location: index.php'); // Cambiar a index.php
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Menú</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Modificar Menú</h1>
        <form id="menuForm" method="post" action="modificar_menu.php">
            <div id="menuItems">
                <!-- Los elementos del menú se generarán dinámicamente aquí -->
            </div>
            <hr>
            <button type="button" id="addMenuItem">Agregar Elemento del Menú</button>
            <button type="submit">Guardar Cambios</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
