import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import ProductsContext from './products-context';

const useGetProductTypes = endpoint => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const source = axios.CancelToken.source();

  const fetchData = () => {
    axios
      .get(endpoint, {
        cancelToken: source.token,
      })
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err);
      });
  };

  useEffect(() => {
    fetchData();
    return () => source.cancel();
  }, []);

  return response;
};

const PROD_ARRAY = [];

const ProductsProvider = props => {
  const { REACT_APP_HOST } = process.env;

  const fetchedBooks = useGetProductTypes(
    `${REACT_APP_HOST}api/products/books`
  );
  const fetchedDvds = useGetProductTypes(`${REACT_APP_HOST}api/products/dvds`);
  const fetchedFurniture = useGetProductTypes(
    `${REACT_APP_HOST}api/products/furniture`
  );

  const [productsToDelete, setProductsToDelete] = useState(PROD_ARRAY);
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);

  const [products, setProducts] = useState([]);
  const [books, setBooks] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [dvds, setDvds] = useState([]);

  useEffect(() => {
    setBooks(fetchedBooks);
  }, [fetchedBooks]);

  useEffect(() => {
    setDvds(fetchedDvds);
  }, [fetchedDvds]);

  useEffect(() => {
    setFurniture(fetchedFurniture);
  }, [fetchedFurniture]);

  // delete products
  const deleteProductsHandler = useCallback(() => {
    // ensure the data is sent in right form to API
    const properFormForDeletion = {
      SKU: productsToDelete,
    };

    if (productsToDelete.length > 0) {
      // disable delete button
      setIsDeleteDisabled(true);

      // make a http req to API
      axios
        .post(`${REACT_APP_HOST}api/products/delete`, properFormForDeletion)
        .then(() => {
          const deleted = productsToDelete;
          // remove deleted products from current products state
          setProducts(prevState => {
            const filteredProducts = prevState.filter(
              product => !deleted.includes(product.SKU)
            );
            return filteredProducts;
          });
          // set the deletion array to empty
          setProductsToDelete(prevState => []);
          setIsDeleteDisabled(false);
        })
        .catch(err => console.log(err));
    }
  }, [REACT_APP_HOST, productsToDelete]);

  // fetch products
  useEffect(() => {
    const source = axios.CancelToken.source();

    const getProducts = () => {
      axios
        .get(`${REACT_APP_HOST}api/products`, {
          cancelToken: source.token,
        })
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
  }, [REACT_APP_HOST]);

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
    books: books,
    furniture: furniture,
    dvds: dvds,
    listProdToDelete: productsToDelete,
    deleteDisabled: isDeleteDisabled,
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
