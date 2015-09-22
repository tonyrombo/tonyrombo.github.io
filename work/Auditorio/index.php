<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Auditorio Municipal Alfredo Kraus</title>
	<!-- styles -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/main.css">
	<!-- styles -->
</head>
<body class='col-md-12 list_tickets_page'>
	<div class="header">
		<h1 class="title">Auditorio Municipal <span>Alfredo Kraus</span></h1>
		<nav class="main-nav">
			<a class="nav-item" href="index.php">Inicio</a>
			<a class="nav-item" href="">Acerca</a>
			<a class="nav-item" href="">Contacto</a>	
		</nav>
	</div>
<?php

	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	// prints the inventary table
	include('views/table.php');

	// include the javascript
	include('views/scripts.php');
?>

</body>
</html>