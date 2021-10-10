import Product from './Product';
import { useContext, useEffect } from 'react';
import classes from './ProductsList.module.css';
import axios from 'axios';
import ProductsContext from '../../store/products-context';

const ProductsList = () => {
  const { REACT_APP_HOST } = process.env;
  const productsCtx = useContext(ProductsContext);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getProducts = () => {
      axios
        .get(`${REACT_APP_HOST}/products`, {
          cancelToken: source.token,
        })
        .then(res => {
          productsCtx.addProducts(res.data);
        })
        .catch(error => {
          if (!axios.isCancel(error)) {
            console.log(error);
          }
        });
    };

    getProducts();

    // CLean up function to ensure no state update on unmounted components -> cancel http request
    return () => {
      source.cancel();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${classes['products-list']}`}>
      {productsCtx.products.map(product => {
        return <Product key={product.SKU} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
