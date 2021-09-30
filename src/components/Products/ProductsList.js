import Product from './Product';
import { useContext } from 'react';
import classes from './ProductsList.module.css';
import ProductsContext from '../../store/products-context';

const ProductsList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className={`${classes['products-list']}`}>
      {products.map(product => {
        return <Product key={product.SKU} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
