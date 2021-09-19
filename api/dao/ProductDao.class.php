<?php
require_once dirname(__FILE__) . "/BaseDao.class.php";

class ProductDao extends BaseDao {
    public function __construct() {
        parent::__construct("products");
    }

    public function addProduct ($product) {
        return $this->add($product);
    }

    public function getAllProducts () {
        return $this->query("SELECT * FROM products", []);
    }
}