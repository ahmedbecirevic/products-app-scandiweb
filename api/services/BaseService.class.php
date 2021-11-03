<?php
class BaseService
{
    protected $dao;

    public function add($data) 
    {
        return $this->dao->add($data);
    }
}