<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once('DatabaseClass.php');

/**
* @class Items
* @description class for items
*/
class drawConcertTable extends Database{
	/**
	* Get all items
	* @return {array} items getted from the database
	*/

	function all(){

		// get all items 
		$query = $this->connection->prepare('SELECT idConcierto, tituloConcierto, fechaConcierto, horaConcierto, precioConcierto FROM concierto');

		// execute the query
		if($query->execute()){

			// return the query result
			return $query->fetchAll();
		}
		return false;
	}

	function eventInfo($id){

		// get event items depending on id in concierto table
		$query = $this->connection->prepare('SELECT idConcierto, tituloConcierto, fechaConcierto, horaConcierto, duracionConcierto, precioConcierto FROM concierto WHERE idConcierto = :id');

		// bind data
		$bind = array(
			':id' => $id
		);

		// execute the query
		if($query->execute($bind)){

			// return the query result
			return $query->fetchAll();
		}
		return false;
	}

	function countTicketsItems($idConcierto){
		// get all items 
		$query = $this->connection->prepare('SELECT COUNT(codEntrada) count FROM entrada WHERE idConcierto = :idConcierto');

		// bind data
		$bind = array(
			':idConcierto' => $idConcierto
		);

		// execute the query
		if($query->execute($bind)){

			// return the query result
			return $query->fetchObject();
		}
		return false;
	}

	function insertEntrada($idEntrada, $idConcierto){
		
		$codEntrada = $idConcierto.$idEntrada;
		$query = $this->connection->prepare('INSERT INTO entrada (codEntrada, idConcierto) VALUES (:codEntrada, :idConcierto)');
		$now = $this->now();
		$bind = array(
			':codEntrada' => $codEntrada,
			':idConcierto' => $idConcierto
		);
		return $query->execute($bind);
	}

	function insertEspectador($cedulaEspectador, $nombreEspectador, $emailEspectador, $cantidadEntradas, $idConcierto){
		$query = $this->connection->prepare('INSERT INTO espectador (cedulaEspectador, nombreEspectador, emailEspectador, cantidadEntradas, idConcierto) VALUES (:cedulaEspectador, :nombreEspectador, :emailEspectador, :cantidadEntradas, :idConcierto)');
		$now = $this->now();
		$bind = array(
			':cedulaEspectador'=>$cedulaEspectador,
			':nombreEspectador'=>$nombreEspectador,
			':emailEspectador'=>$emailEspectador,
			':cantidadEntradas'=>$cantidadEntradas,
			':idConcierto'=>$idConcierto
		);
		return $query->execute($bind);
	}

	/**
	* Get the now date time
	* @return {string} date time
	*/
	private function now(){
		
		// create the date time
		$now = new DateTime('now');
		$now = $now->format('Y-m-d H:i:s');

		return $now;
	}
}
?>