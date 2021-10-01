import ProductsContext from '../../store/products-context';
import Button from '../UI/Button';
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
          <Button id='add-product-btn'>Add</Button>
        </Link>
        <Button
          disabled={productsCtx.deleteDisabled}
          onClick={deleteProductsHandler}
          id={classes['delete-product-btn']}
        >
          Delete
        </Button>
      </ul>
    </nav>
  );
};

export default Navigation;
