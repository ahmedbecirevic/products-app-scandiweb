import Product from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { REACT_APP_HOST } = process.env;
  console.log(REACT_APP_HOST);
  useEffect(() => {
    axios
      .get(`${REACT_APP_HOST}api/products`)
      .then(data => {
        setProducts(data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {products.map(product => {
        return <Product key={product.SKU} product={product} />;
      })}
    </>
  );
};

export default ProductsList;
