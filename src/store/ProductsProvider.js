import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductsContext from './products-context';

const PROD_ARRAY = [];

const ProductsProvider = props => {
  const { REACT_APP_HOST } = process.env;
  const [productsToDelete, setProductsToDelete] = useState(PROD_ARRAY);

  const deleteProductsHandler = () => {
    // useEffect(() => {
    console.log({ SKU: productsToDelete });
    // const properFormForDeletion = {
    //   SKU: productsContext.products.filter(),
    // };
    // axios.delete(`${REACT_APP_HOST}api/products`, {
    //   data: {
    //     properFormForDeletion,
    //   },
    // });
    // }, []);
  };

  const addProductToDeleteHandler = SKU => {
    setProductsToDelete(prevState => {
      return [...prevState, SKU];
    });
  };

  const removeProductFromDeleteHandler = SKU => {
    setProductsToDelete(prevState => {
      const newArray = prevState.filter(skuState => skuState !== SKU);
      return newArray;
    });
  };

  const productsContext = {
    listProdToDelete: productsToDelete,
    addProductToDelete: addProductToDeleteHandler,
    removeProductFromDelete: removeProductFromDeleteHandler,
    deleteProducts: deleteProductsHandler,
  };

  return (
    <ProductsContext.Provider value={productsContext}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
