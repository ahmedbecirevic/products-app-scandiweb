import { useRef } from 'react';
import ProductsContext from '../../store/products-context';
import { Card } from 'react-bootstrap';
import classes from './Product.module.css';
import { useContext } from 'react';

const Product = ({ product }) => {
  const { addProductToDelete, removeProductFromDelete } =
    useContext(ProductsContext);
  const checkboxRef = useRef();

  const checkedHandler = () => {
    if (checkboxRef.current.checked) {
      addProductToDelete(product.SKU);
    }
    if (!checkboxRef.current.checked) {
      removeProductFromDelete(product.SKU);
    }
  };

  return (
    <div className='card-columns'>
      <Card className={`${classes.card}`}>
        <input
          type='checkbox'
          ref={checkboxRef}
          // checked={isChecked}
          onChange={checkedHandler}
        />
        <Card.Body>
          <Card.Text>{product.SKU}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.name}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
