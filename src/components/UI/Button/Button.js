import classes from './Button.module.css';

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${props.className ? props.className : ''}`}
      id={props.id}
      disabled={props.disabled}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
