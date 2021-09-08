import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>Add</li>
        <li>Delete</li>
      </ul>
    </nav>
  );
};

export default Navigation;
