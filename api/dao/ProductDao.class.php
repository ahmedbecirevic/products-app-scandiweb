<?php
require_once dirname(__FILE__) . "/BaseDao.class.php";

class ProductDao extends BaseDao 
{
    public function __construct () 
    {
        parent::__construct("products");
    }

    public function addProduct ($product) 
    {
        return $this->add($product);
    }

    public function getAllProducts () 
    {
        return $this->query("SELECT * FROM products", []);
    }

    public function deleteProducts ($listOfSKU) 
    {
        $query = "DELETE FROM products WHERE SKU IN (";
        foreach ($listOfSKU as $SKU) {
            $query .= '"' . $SKU . '"' . ", ";
        }
        $query = substr($query, 0, -2);
        $query .= ")";
        return $this->query($query, []);
    }
}