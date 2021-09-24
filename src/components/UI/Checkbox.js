import classes from './Checkbox.module.css';

const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      className={classes['delete-checkbox']}
      type='checkbox'
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
