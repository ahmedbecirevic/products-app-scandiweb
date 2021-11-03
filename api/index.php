<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once dirname(__FILE__) . "/vendor/autoload.php";
require_once dirname(__FILE__) . "/services/ProductService.class.php";
require_once dirname(__FILE__) . "/routes/Route.class.php";
require_once dirname(__FILE__) . "/Utils.class.php";
require_once dirname(__FILE__) . "/config.php";
require_once dirname(__FILE__) . "/Cors.class.php";
require_once dirname(__FILE__) . "/routes/Request.class.php";


try {
  // Allow and set up CORS by calling this function from Cors.class.php file
  Cors::cors();

} catch (\Throwable $th) {
  throw $th;
}
  
// define instance of ProductService class
$productsService = new ProductService();
$request = new Request();

// base route for API
Route::add('/', function () {
  echo "Base route for the API!";
});

// gets all products
Route::add('/products', function () {
  global $productsService;

  // capture response from DB
  $products = $productsService->getAllProducts();

  // return the products in JSON
  echo json_encode($products);
});

//add new product
Route::add('/products', function () {
  global $productsService;
  global $request;

  // add the new product and store the added Product object in $product
  $product = $productsService->addProduct($request->getBody());

  // return the object in json as a response
  echo json_encode($product); // get the data from body

}, 'post');

//delete products
Route::add('/products/delete', function () {
  global $productsService;
  global $request;

  $response = $productsService->deleteProducts($request->getBody()['SKU']);
  if (isset($response)) echo json_encode(["message" => "Products have been deleted."]);
  
}, 'post');

$path = '/products-app-scandiweb/api';

// if (Config::SERVER_NAME() == 'localhost') {
//   $path = '/products-app-scandiweb/api';
// }

Route::run($path);
?>