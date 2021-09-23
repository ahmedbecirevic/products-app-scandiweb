import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <Link to='/add-product'>
          <Button id='add-product-btn'>Add</Button>
        </Link>
        <Button id='delete-product-btn' className={classes['delete-button']}>
          Delete
        </Button>
      </ul>
    </nav>
  );
};

export default Navigation;
