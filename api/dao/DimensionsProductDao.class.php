<?php
require_once dirname(__FILE__) . "/BaseDao.class.php";

class DimensionsProductDao extends BaseDao {
    public function __construct() {
        parent::__construct("dimensions_products");
    }

    public function addDimensionsProduct ($SKU, $height, $width, $lenght) {
        
    }
}