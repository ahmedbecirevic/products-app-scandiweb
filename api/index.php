<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once dirname(__FILE__) . "/services/ProductService.class.php";
require_once dirname(__FILE__) . "/routes/Route.class.php";
require_once dirname(__FILE__) . "/Utils.class.php";
require_once dirname(__FILE__) . "/config.php";

header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');


// var_dump(parse_url($_SERVER['REQUEST_URI']));
$productsService = new ProductService();

// var_dump($_SERVER['SCRIPT_NAME']);
// var_dump($_SERVER['SERVER_NAME']);
// echo Config::PROTOCOL();


// gets all products
Route::add('/products', function () {
  global $productsService;
  echo json_encode($productsService->getAllProducts(), JSON_PRETTY_PRINT);
});

//add new product
Route::add('/products', function () {
  global $productsService;
  echo json_encode($productsService->addProduct(Utils::postRequest())); // get the data from body
}, 'post');

//delete products
Route::add('/products', function () {
  global $productsService;
  // echo json_encode($productsService->deleteProducts(array_values(Utils::postRequest())));
  echo json_encode($productsService->deleteProducts(Utils::postRequest()['SKU']));
  // var_dump(json_decode(file_get_contents('php://input')));
}, 'delete');

Route::add('/products/([A-Z]+[0-9]+)', function ($SKU) {
  echo $SKU;
}, 'delete');

$path = '/api';

if (Config::SERVER_NAME() == 'localhost') {
  $path = '/products-app-scandiweb/api';
}

Route::run($path);
?>