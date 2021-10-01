<?php
require_once dirname(__FILE__) . "/BaseDao.class.php";

class BookDao extends BaseDao {
    public function __construct() {
        parent::__construct("books");
    }

    public function getBooks () {
        return $this->query("SELECT * FROM books", []);
    }
}