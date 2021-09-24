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
        <Button id={classes['delete-product-btn']}>Delete</Button>
      </ul>
    </nav>
  );
};

export default Navigation;
