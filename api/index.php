<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once dirname(__FILE__) . "/services/ProductService.class.php";
require_once dirname(__FILE__) . "/routes/Route.class.php";

$test = new ProductService();
echo json_encode($test->getAll(), JSON_PRETTY_PRINT);
?>