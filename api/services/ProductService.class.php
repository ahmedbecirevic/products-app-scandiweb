<?php
require_once dirname(__FILE__) . '/BaseService.class.php';
require_once dirname(__FILE__) . '/../dao/ProductDao.class.php';

class ProductService extends BaseService {
  public function __construct ()
  {
    $this->dao = new ProductDao();
  }
}