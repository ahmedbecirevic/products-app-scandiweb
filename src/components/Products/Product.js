import { useRef } from 'react';
import ProductsContext from '../../store/products-context';
import { Card } from 'react-bootstrap';
import classes from './Product.module.css';
import { useContext } from 'react';

const PROD_TYPES = { FURN: 'Dimension', DVD: 'Size', BOOK: 'Weight' };
const PROD_UNITS = { FURN: '', DVD: 'MB', BOOK: 'KG' };

const Product = ({ product }) => {
  // get the needed functions for product deletion from context
  const { addProductToDelete, removeProductFromDelete } =
    useContext(ProductsContext);
  const checkboxRef = useRef();

  // format the product
  const productAttribute = `${PROD_TYPES[product.type]}: ${
    product.prod_attribute
  }${PROD_UNITS[product.type]}`;

  // handle checkbox on/off
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
        <input type='checkbox' ref={checkboxRef} onChange={checkedHandler} />
        <Card.Body>
          <Card.Text>{product.SKU}</Card.Text>
          <Card.Text>{product.name}</Card.Text>
          <Card.Text>{product.price} $</Card.Text>
          <Card.Text>{productAttribute}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
