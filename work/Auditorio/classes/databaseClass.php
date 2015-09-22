<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

/**
* Connect to the database
*/
class Database{	
	// private variables
	private $username = 	'root';
	private $password = 	'';
	private $host = 		'localhost';
	private $database = 	'info_conciertos';
	protected $connection =  NULL;

	/**
	* Connect to the database
	*/
	function __construct(){
		try{
			// create the connection
			$this->connection = new PDO("mysql:host=".$this->host.";dbname=".$this->database, $this->username, $this->password);

			$this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}catch(PDOException $error){
			die();
		}
	}

	function __destruct(){
		$this->connection = NULL;
	}
}
?>