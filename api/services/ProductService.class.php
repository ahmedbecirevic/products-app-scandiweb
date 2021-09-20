<?php
require_once dirname(__FILE__) . '/BaseService.class.php';
require_once dirname(__FILE__) . '/../dao/ProductDao.class.php';
require_once dirname(__FILE__) . '/../dao/DimensionsProductDao.class.php';
require_once dirname(__FILE__) . '/../dao/SizeProductDao.class.php';
require_once dirname(__FILE__) . '/../dao/WeightProductDao.class.php';


class ProductService extends BaseService {
  public function __construct ()
  {
    $this->dao = new ProductDao();
    $this->weightProduct = new WeightProductDao();
    $this->sizeProduct = new SizeProductDao();
    $this->dimensionsProduct = new DimensionsProductDao();
  }

  public function getAllProducts () {
    return $this->dao->getAllProducts();
  }

  public function addProduct ($product) {
    try {
      // start the transaction
      $this->dao->beginTransaction();

      if (array_key_exists("height", $product)) {
        $dimProd = $this->dimensionsProduct->add([
          'SKU' => $product['SKU'],
          'height' => $product['height'],
          'width' => $product['width'],
          'lenght' => $product['lenght']
        ]);
      }

      if (array_key_exists("size", $product)) {
        $sizeProd = $this->sizeProduct->add([
          'SKU' => $product['SKU'],
          'size' => $product['size']
        ]);
      }

      if (array_key_exists("weight", $product)) {
        $sizeProd = $this->sizeProduct->add([
          'SKU' => $product['SKU'],
          'weight' => $product['weight']
        ]);
      }

      $product = $this->dao->add([
        'SKU' => $product['SKU'], 
        'name' => $product['name'],
        'price' => $product['price']
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
  
  
}