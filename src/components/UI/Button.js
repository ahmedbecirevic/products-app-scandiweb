import classes from './Button.module.css';

const Button = props => {
  return (
    <button
      className={`${classes.button} ${props.className ? props.className : ''}`}
      id={props.id}
    >
      {props.children}
    </button>
  );
};

export default Button;
