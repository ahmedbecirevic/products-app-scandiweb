<?php
require_once dirname(__FILE__) . '/BaseService.class.php';
require_once dirname(__FILE__) . '/../dao/FurnitureDao.class.php';

class FUrnitureService extends BaseService {
   public function __construct ()
  {
    $this->dao = new FurnitureDao();
  }

  public function getFurniture () {
    return $this->dao->getFurniture();
  }
}
?>