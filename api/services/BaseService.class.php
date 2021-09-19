<?php
class BaseService
{
    protected $dao;

    public function add($data) {
        return $this->dao->add($data);
    }
    // public function update($id, $data)
    // {
    //     $this->dao->update($id, $data);
    //     return $this->dao->get_by_id($id);
    // }

}