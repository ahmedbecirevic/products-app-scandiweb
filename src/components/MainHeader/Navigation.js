import ProductsContext from '../../store/products-context';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useContext } from 'react';

const Navigation = () => {
  const productsCtx = useContext(ProductsContext);


  const deleteProductsHandler = () => {
    productsCtx.deleteProducts();
  };

  return (
    <nav className={classes.nav}>
      <ul>
        <Link to='/addproduct'>
          <Button id='add-product-btn'>ADD</Button>
        </Link>
        <Button
          id='delete-product-btn'
          disabled={productsCtx.deleteDisabled}
          onClick={deleteProductsHandler}
          className={classes['delete-product-btn']}
        >
          MASS DELETE
        </Button>
      </ul>
    </nav>
  );
};

export default Navigation;
