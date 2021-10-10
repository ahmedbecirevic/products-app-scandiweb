import React from 'react';
import classes from './Checkbox.module.css';

const Checkbox = React.forwardRef((props, ref) => {
  return (
    <input
      className={`${classes['checkbox']} ${props.className}`}
      type='checkbox'
      ref={ref}
      onChange={props.onChange}
      id={props.id}
    />
  );
});

export default Checkbox;
