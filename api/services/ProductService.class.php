<?php
require_once dirname(__FILE__) . '/BaseService.class.php';
require_once dirname(__FILE__) . '/../dao/ProductDao.class.php';

class ProductService extends BaseService {
  public function __construct ()
  {
    $this->dao = new ProductDao();
  }

  public function getAllProducts () {
    return $this->dao->getAllProducts();
  }

  public function addProduct ($product) {
    return $this->dao->addProduct($product);
  }
}