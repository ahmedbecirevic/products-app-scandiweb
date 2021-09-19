import Product from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './ProductsList.module.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { REACT_APP_HOST } = process.env;
  useEffect(() => {
    axios
      .get(`${REACT_APP_HOST}api/products`)
      .then(data => {
        setProducts(data.data);
      })
      .catch(e => {
        console.log(e);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${classes['products-list']}`}>
      {products.map(product => {
        return <Product key={product.SKU} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
