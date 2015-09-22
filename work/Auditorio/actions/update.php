<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// load the items class 
require_once('../classes/concertClass.php');

$response = array(
	'error' => true,
	'message' => ''
);

if(isset($_POST['id']) && isset($_POST['name'])){
	$id = $_POST['id'];
	$name = $_POST['name'];

	$items = new Items();

	// update the item
	if($items->update($id, $name)){

		$response['error'] = false;
		$response['message'] = 'Item has been updated';
	}else{
		$response['message'] = 'Could not update the item';
	}	
}else{
	$response['message'] = 'Missing id value';
}

// json response
echo json_encode($response);
?>