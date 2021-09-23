import Product from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './ProductsList.module.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { REACT_APP_HOST } = process.env;

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
  }, [REACT_APP_HOST]);

  return (
    <div className={`${classes['products-list']}`}>
      {products.map(product => {
        return <Product key={product.SKU} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
