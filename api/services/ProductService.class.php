<?php
require_once dirname(__FILE__) . '/BaseService.class.php';
require_once dirname(__FILE__) . '/../dao/ProductDao.class.php';
require_once dirname(__FILE__) . '/Product.class.php';

class ProductService extends BaseService 
{
  private Product $product;

  public function __construct ()
  {
    $this->dao = new ProductDao();
    $this->product = new Product();
  }

  // get products
  public function getAllProducts () 
  {
    $products = $this->dao->getAllProducts();
    $productsArray = [];

    // build an array of Product objects from fetched data
    foreach ($products as $key => $value) {
      $productsArray[] = new Product(
        $value['name'],
        $value['SKU'],
        $value['price'],
        $value['prod_attribute'],
        $value['type']
      );
    }
    
    return $productsArray;
  }

  // add product
  public function addProduct ($productData) 
  {
    // store the new product data to Product class instance using setProduct method
    $this->product->setProduct($productData);

    // check if SKU or product type is in the request
    if (null == $this->product->getSku()) throw new Exception("SKU is missing in arguments list.", 400);
    if (null == $this->product->getType()) throw new Exception("Type is missing in arguments list.", 400);

    try {
      // start the transaction
      $this->dao->beginTransaction();

      // build the new product into var
      $product = [
        'SKU' => $this->product->getSku(), 
        'name' => $this->product->getName(),
        'price' =>$this->product->getPrice(),
        'prod_attribute' => $this->product->getProductAttribute(),
        'type' => $this->product->getType()
      ];

      // execute the function for adding and pass as an argument the new product
      $product = $this->dao->add($product);

      $newProduct = new Product(
        $product['name'], 
        $product['SKU'],
        $product['price'],
        $product['prod_attribute'],
        $product['type']
      );

      // if all clears commit 
      $this->dao->commit();

    } catch (\Exception $e) {
      // disregard if error thrown
      $this->dao->rollBack();

      throw $e;
    }

    return $newProduct;
  }
  
  //delete products, args passed an array of SKU
  public function deleteProducts ($listOfSKU) 
  {
    return $this->dao->deleteProducts($listOfSKU);
  }
  
}