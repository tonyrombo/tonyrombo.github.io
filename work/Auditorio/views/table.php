<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
/**
 * @name table.php
 * @description prints all the inventary items inside a table
 */

require_once('./classes/concertClass.php');

// instace of the items
$concert = new drawConcertTable();

// get all items on the database from concierto and entrada
$concertItems= $concert->all();
// print the table
echo'
<div class="col-md-8 table-container-list">
	<table class="table">
		<thead class="table-row-header">
			<tr>
				<th>id</th>
				<th>Concierto</th>
				<th>Fecha</th>
				<th>Hora</th>
				<th>Precio</th>
				<th>Entradas Disponibles</th>
			</tr>
		</thead>
		<tbody>
';

foreach ($concertItems as $key => $item) {
	echo'
	<tr id="'.$item['idConcierto'].'">
		<td>
			'.$item['idConcierto'].'
		</td>
		<td>
			'.$item['tituloConcierto'].
		'</td>
		<td>'
			.$item['fechaConcierto'].
		'</td>
		<td>'
			.$item['horaConcierto'].
		'</td>
		<td>&#8353 '
			.$item['precioConcierto'].
		'</td>
		<td>'
			.(150 - $concert->countTicketsItems($item['idConcierto'])->count).
		'</td>
		<td>
			<a class="btn-buy-ticket btn-success" href="buy.php?id='.$item['idConcierto'].'">Comprar Entrada</a>
		</td>
	  </tr>
	';
}

echo '</tbody>';
echo '</table>';

?>