<?php
require_once dirname(__FILE__) . '/BaseService.class.php';
require_once dirname(__FILE__) . '/../dao/BookDao.class.php';

class BookService extends BaseService {
   public function __construct ()
  {
    $this->dao = new BookDao();
  }

  public function getBooks () {
    return $this->dao->getBooks();
  }
}
?>