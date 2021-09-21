import Button from '../UI/Button';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <Button id='add-product-btn'>Add</Button>
        <Button id='delete-product-btn' className={classes['delete-button']}>
          Delete
        </Button>
      </ul>
    </nav>
  );
};

export default Navigation;
