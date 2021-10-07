import classes from './Checkbox.module.css';

const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      className={`${classes['checkbox']}`}
      type='checkbox'
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
