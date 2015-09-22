<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once('./classes/concertClass.php');

$id = $_GET['id'];

// instace of the items
$concertData = new drawConcertTable();

// get all items on the database from concierto and entrada
$concertItems= $concertData->eventInfo($id);

include('views/header.php');
include('views/body.php');
include('views/form.php');
include('views/event-info.php');
include('views/footer.php');
?>