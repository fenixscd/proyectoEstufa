<?php
	session_start();
	$_SESSION['sesionName'] = uniqid();
	echo $_SESSION['sesionName'];
?>