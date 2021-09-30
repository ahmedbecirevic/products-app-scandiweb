import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import ProductsContext from './products-context';

const PROD_ARRAY = [];

const ProductsProvider = props => {
  const { REACT_APP_HOST } = process.env;
  const [productsToDelete, setProductsToDelete] = useState(PROD_ARRAY);
  const [products, setProducts] = useState([]);

  // delete products
  const deleteProductsHandler = useCallback(() => {
    const properFormForDeletion = {
      SKU: productsToDelete,
    };

    axios
      .post(`${REACT_APP_HOST}api/products/delete`, properFormForDeletion)
      .then(() => {
        setProducts(prevState => []);
        setProductsToDelete(prevState => []);
      });
  }, [productsToDelete, REACT_APP_HOST]);

  // fetch products
  useEffect(() => {
    const source = axios.CancelToken.source();

    const getProducts = () => {
      axios
        .get(`${REACT_APP_HOST}api/products`, { cancelToken: source.token })
        .then(data => {
          setProducts(data.data);
        })
        .catch(error => {
          if (!axios.isCancel(error)) {
            console.log(error);
          }
        });
    };

    getProducts();

    // CLean up function to ensure no state update on unmounted components
    return () => {
      source.cancel();
    };
  }, [REACT_APP_HOST, products]);

  // add product SKU to deletion list
  const addProductToDeleteHandler = SKU => {
    setProductsToDelete(prevState => {
      return [...prevState, SKU];
    });
  };

  // remove product SKU from the deletion list
  const removeProductFromDeleteHandler = SKU => {
    setProductsToDelete(prevState => {
      const newArray = prevState.filter(skuState => skuState !== SKU);
      return newArray;
    });
  };

  const productsContext = {
    products: products,
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
