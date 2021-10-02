<?php
require_once dirname(__FILE__) . '/BaseService.class.php';
require_once dirname(__FILE__) . '/../dao/ProductDao.class.php';
require_once dirname(__FILE__) . '/../dao/FurnitureDao.class.php';
require_once dirname(__FILE__) . '/../dao/DVDDao.class.php';
require_once dirname(__FILE__) . '/../dao/BookDao.class.php';

class ProductService extends BaseService {
  public function __construct ()
  {
    $this->dao = new ProductDao();
    $this->bookDao = new BookDao();
    $this->dvdDao = new DVDDao();
    $this->furnitureDao = new FurnitureDao();
  }

  public function getAllProducts () {
    return $this->dao->getAllProducts();
  }

  public function addProduct ($product) {
    try {
      // start the transaction
      $this->dao->beginTransaction();

      if (array_key_exists("height", $product)) {
        $dimProd = $this->furnitureDao->add([
          'SKU' => $product['SKU'],
          'height' => $product['height'],
          'width' => $product['width'],
          'lenght' => $product['lenght']
        ]);
      }

      if (array_key_exists("size", $product)) {
        $sizeProd = $this->dvdDao->add([
          'SKU' => $product['SKU'],
          'size' => $product['size']
        ]);
      }

      if (array_key_exists("weight", $product)) {
        $sizeProd = $this->bookDao->add([
          'SKU' => $product['SKU'],
          'weight' => $product['weight']
        ]);
      }

      $product = $this->dao->add([
        'SKU' => $product['SKU'], 
        'name' => $product['name'],
        'price' => $product['price'],
        'prod_attribute' => $product['prod_attribute'],
        'type' => $product['type']
      ]);
      // if all clears commit 
      $this->dao->commit();

    } catch (\Exception $e) {
      // disregard if error thrown
      $this->dao->rollBack();
      throw $e;
    }
    return $product;
  }
  
  //delete products, args passed an array of SKU
  public function deleteProducts ($listOfSKU) {
    return $this->dao->deleteProducts($listOfSKU);
  }
  
}