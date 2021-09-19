<?php
require_once dirname(__FILE__) . "/BaseDao.class.php";

class SizeProductDao extends BaseDao {
    public function __construct() {
        parent::__construct("size_products");
    }

    public function addSizeProduct ($SKU, $size) {

    }
}