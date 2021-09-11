import { Card } from 'react-bootstrap';
import classes from './Product.module.css';

const Product = ({ product }) => {
  return (
    <div className='card-columns'>
      <Card className={`${classes.card}`}>
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
