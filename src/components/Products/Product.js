import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Checkbox from '../UI/Checkbox';
import classes from './Product.module.css';

const Product = ({ product }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkedHandler = () => setIsChecked(!isChecked);

  return (
    <div className='card-columns'>
      <Card className={`${classes.card}`}>
        <Checkbox checked={isChecked} onChange={checkedHandler} />
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
