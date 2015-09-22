<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// load the items class 
require_once('../classes/concertClass.php');

// response
$response = array(
	'error' => true,
	'message' => '',
);

if(isset($_GET['id'])){
	$id = $_GET['id'];

	$items = new Items();
	if($items->delete($id)){
		$response = array(
			'error' => false,
			'message' => "The item id: $id has been deleted"
		);
	}
}else{
	$response['message'] = 'Undefined item id';
}

// json response
echo json_encode($response);
?>