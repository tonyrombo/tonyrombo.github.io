<?php 

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo'
<div class="col-md-4 table-container">
	<h2>Compra las entradas para el evento</h2>		
	<form name="ticketForm" action="thanks.php?id='.$_GET['id'].'" method="POST">
		<div class="form-group col-md-12">
			<label for="name">Nombre completo</label>
			<input type="text" class="form-control" name="name" id="name" placeholder="Nombre completo"><br>
			<label for="id">Número de cédula (completo)</label>
			<input type="text" class="form-control" name="userId" id="userId" placeholder="Número de cédula"><br>
			<label for="entradas">Cantidad de entradas(5 max.)</label>
			<select class="form-control" name="entradas" id="entradas">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select><br>
			<label for="email">Correo electrónico</label>
			<input type="email" class="form-control" name="email" id="email" placeholder="Correo electrónico"><br>
			<input type="submit" value="Comprar" class="form-control btn-buy-ticket btn-success" id="submit-btn">
		</div>
	</form>
</div>
';

include('form-scripts.php');

?>