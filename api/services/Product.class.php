<?php

class Product implements JsonSerializable
{
  private $name;
  private $SKU;
  private $price;
  private $prod_attribute;
  private $type;

  function __construct ($name = null, $SKU = null, $price = null, $prod_attribute = null, $type = null)
  {
    $this->name = $name;
    $this->SKU = $SKU;
    $this->price = $price;
    $this->prod_attribute = $prod_attribute;
    $this->type = $type;
  }

  public function getSku ()
  {
    return $this->SKU;
  }

  public function getName ()
  {
    return $this->name;
  }

  public function getPrice ()
  {
    return $this->price;
  }

  public function getProductAttribute ()
  {
    return $this->prod_attribute;
  }

  public function getType ()
  {
    return $this->type;
  }

  // set variable values to an instance of a Product class from associative array passed as an argument
  public function setProduct ($productData) {
    foreach ($productData as $key => $value) $this->{$key} = $value;
  }

  // implemented function from interface that enables json encoding instances of this class
  public function jsonSerialize()
  {
    return 
    [
      'SKU' => $this->getSku(), 
      'name' => $this->getName(),
      'price' =>$this->getPrice(),
      'prod_attribute' => $this->getProductAttribute(),
      'type' => $this->getType()
    ];
  }
}
