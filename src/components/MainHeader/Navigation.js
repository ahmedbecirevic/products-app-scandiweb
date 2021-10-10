import ProductsContext from '../../store/products-context';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useContext, useCallback, useState } from 'react';
import axios from 'axios';

const Navigation = () => {
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);
  const { REACT_APP_HOST } = process.env;
  const productsCtx = useContext(ProductsContext);

  const { listProdToDelete, removeProducts } = productsCtx;

  const deleteProductsHandler = useCallback(() => {
    if (listProdToDelete.length > 0) {
      // ensure the data is sent in right form to API
      const properFormForDeletion = {
        SKU: listProdToDelete,
      };
      // disable delete button
      setIsDeleteDisabled(true);

      removeProducts();

      // make a http req to API
      axios
        .post(`${REACT_APP_HOST}/products/delete`, properFormForDeletion)
        .then(() => {
          // enable delete button
          setIsDeleteDisabled(false);
        })
        .catch(err => console.log(err));
    }
  }, [REACT_APP_HOST, listProdToDelete, removeProducts]);

  return (
    <nav className={classes.nav}>
      <ul>
        <Link to='/addproduct'>
          <Button id='add-product-btn'>ADD</Button>
        </Link>
        <Button
          id='delete-product-btn'
          disabled={isDeleteDisabled}
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
