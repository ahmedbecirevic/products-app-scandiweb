import classes from './Input.module.css';

const Input = props => {
  return (
    <div className={classes.control}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        pattern={props.pattern}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        title='Please, provide the data of indicated type'
      />
    </div>
  );
};

export default Input;
