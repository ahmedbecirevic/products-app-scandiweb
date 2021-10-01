<?php
require_once dirname(__FILE__) . '/BaseService.class.php';
require_once dirname(__FILE__) . '/../dao/DVDDao.class.php';

class DVDService extends BaseService {
   public function __construct ()
  {
    $this->dao = new DVDDao();
  }

  public function getDVDs () {
    return $this->dao->getDVDs();
  }
}
?>