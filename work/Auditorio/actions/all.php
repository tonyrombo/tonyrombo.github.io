<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// include the items class
include_once('../classes/concertClass.php');

// response
$response = array(
	'error' => true,
	'message' => '',
);

$items = new Items();

if($allItems = $items->all()){
	$response['error'] = false;
	$response['data'] = $allItems;
}

// response
echo json_encode($response);
?>