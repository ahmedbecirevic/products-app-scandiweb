import { useState } from 'react';
import ProductsContext from './products-context';

const ProductsProvider = props => {
  const [productsToDelete, setProductsToDelete] = useState([]);
  const [products, setProducts] = useState([]);

  // add new product to state
  const addProductsHandler = products => {
    setProducts(products);
  };

  const addNewProductHandler = product => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  // filter deleted products
  const removeProductsHandler = () => {
    const deleted = productsToDelete;
    // remove deleted products from current products state
    setProducts(prevState => {
      const filteredProducts = prevState.filter(
        product => !deleted.includes(product.SKU)
      );
      return filteredProducts;
    });
    // set the deletion array to empty
    setProductsToDelete([]);
  };

  // add product SKU to deletion list
  const addProductToDeleteHandler = SKU => {
    setProductsToDelete(prevState => {
      return [...prevState, SKU];
    });
  };

  // remove product SKU from the deletion list
  const removeProductFromDeleteHandler = SKU => {
    setProductsToDelete(prevState => {
      const removedFromDelete = prevState.filter(skuState => skuState !== SKU);
      return removedFromDelete;
    });
  };

  const productsContext = {
    products: products,
    listProdToDelete: productsToDelete,
    addProductToDelete: addProductToDeleteHandler,
    removeProductFromDelete: removeProductFromDeleteHandler,
    addProducts: addProductsHandler,
    addNewProduct: addNewProductHandler,
    removeProducts: removeProductsHandler,
  };

  return (
    <ProductsContext.Provider value={productsContext}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
