<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once dirname(__FILE__) . "/services/ProductService.class.php";
require_once dirname(__FILE__) . "/services/BookService.class.php";
require_once dirname(__FILE__) . "/services/DVDService.class.php";
require_once dirname(__FILE__) . "/services/FurnitureService.class.php";
require_once dirname(__FILE__) . "/routes/Route.class.php";
require_once dirname(__FILE__) . "/Utils.class.php";
require_once dirname(__FILE__) . "/config.php";
require_once dirname(__FILE__) . "/Cors.class.php";

// Allow and set up CORS by calling this function from Cors.class.php file
Cors::cors();
  
// define instance of ProductService class
$productsService = new ProductService();
$bookService = new BookService();
$dvdService = new DVDService();
$furnitureService = new FurnitureService();

// base route for API
Route::add('/', function () {
  echo "Hello world";
});

// gets all products
Route::add('/products', function () {
  global $productsService;
  echo json_encode($productsService->getAllProducts(), JSON_PRETTY_PRINT);
});

//  fetch all books
Route::add('/products/books', function () {
  global $bookService;
  echo json_encode($bookService->getBooks(), JSON_PRETTY_PRINT);
});

//  fetch all DVDs
Route::add('/products/dvds', function () {
  global $dvdService;
  echo json_encode($dvdService->getDVDs(), JSON_PRETTY_PRINT);
});

//  fetch all furniture
Route::add('/products/furniture', function () {
  global $furnitureService;
  echo json_encode($furnitureService->getFurniture(), JSON_PRETTY_PRINT);
});

//add new product
Route::add('/products', function () {
  global $productsService;
  echo json_encode($productsService->addProduct(Utils::postRequest())); // get the data from body
}, 'post');

//delete products
Route::add('/products/delete', function () {
  global $productsService;
  $productsService->deleteProducts(Utils::postRequest()['SKU']);
    // echo json_encode(["message" => "success"]);
  
}, 'post');

$path = '/products-app-scandiweb/api';

// if (Config::SERVER_NAME() == 'localhost') {
//   $path = '/products-app-scandiweb/api';
// }

Route::run($path);
?>