<?php
$title = 'Menú de la Semana';
$paragraph = 'El menú de la semana incluye una variedad de platillos deliciosos. Es importante que los platillos sean consumidos en el orden indicado para obtener los mejores resultados.';
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menú Dinámico</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div id="menu"></div>

  <main>
    <h1><?php echo $title; ?></h1>
    <p>
      <?php echo $paragraph;?>
    </p>
  </main>

  <a href="modificar_menu.php" id="btn">Modificar Menú</a>

  <script src="script.js"></script>
</body>

</html>