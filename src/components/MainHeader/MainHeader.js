import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';

const MainHeader = props => {
  return (
    <header className={classes['main-header']}>
      <Link to='/'>
        <h1>Product List</h1>
      </Link>
      <Navigation />
    </header>
  );
};

export default MainHeader;
