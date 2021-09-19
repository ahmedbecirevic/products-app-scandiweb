<?php
require_once dirname(__FILE__) . "/BaseDao.class.php";

class WeightProductDao extends BaseDao {
    public function __construct() {
        parent::__construct("weight_products");
    }

    public function addWeightProduct ($SKU, $weight) {
        
    }
}