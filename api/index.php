<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once dirname(__FILE__) . "/services/ProductService.class.php";
require_once dirname(__FILE__) . "/routes/Route.class.php";
require_once dirname(__FILE__) . "/Utils.class.php";


// echo json_encode($test->getAll(), JSON_PRETTY_PRINT);

// Route::add('/', function() {
//   echo '<form method="post"><input type="text" name="test" /><input type="submit" value="send" /></form>';
// });

// var_dump(parse_url($_SERVER['REQUEST_URI']));
$productsService = new ProductService();


//gets all products
Route::add('/products', function () {
  global $productsService;
  echo json_encode($productsService->getAll(), JSON_PRETTY_PRINT);
});

//add new product
Route::add('/products', function () {
  global $productsService;
  echo json_encode($productsService->add(Utils::postRequest())); // get the data from body
}, 'post');


Route::add('/products/([A-Z]+[0-9]+)', function ($SKU) {
  echo $SKU;
}, 'delete');

Route::run('/products-app-scandiweb/api');
?>