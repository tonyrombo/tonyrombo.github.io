<?php  
	foreach ($concertItems as $key => $item) {
		echo'
			<div class="table-container col-md-6 info-event">
				<p>'.'Evento: <span>'.$item['tituloConcierto'].'.</span>'.'</p>
				<p>'.'Fecha: '.$item['fechaConcierto'].'.'.'</p>
				<p>'.'Hora: '.$item['horaConcierto'].'.'.'</p>
				<p>'.'Duración aproximada: '.$item['duracionConcierto'].'.'.'</p>
				<p>'.'Precio de la entrada:  <span>&#8353 '.$item['precioConcierto'].'.<span>'.'</p>
			</div>
		';
	}
?>