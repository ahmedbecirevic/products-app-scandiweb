<?php
require_once dirname(__FILE__) . "/BaseDao.class.php";

class FurnitureDao extends BaseDao {
    public function __construct() {
        parent::__construct("furniture");
    }

    public function getFurniture () {
        return $this->query("SELECT * FROM furniture", []);
    }
}