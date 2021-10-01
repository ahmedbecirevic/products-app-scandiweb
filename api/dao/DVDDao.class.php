<?php
require_once dirname(__FILE__) . "/BaseDao.class.php";

class DVDDao extends BaseDao {
    public function __construct() {
        parent::__construct("dvds");
    }

    public function getDVDs () {
        return $this->query("SELECT * FROM dvds", []);
    }
}