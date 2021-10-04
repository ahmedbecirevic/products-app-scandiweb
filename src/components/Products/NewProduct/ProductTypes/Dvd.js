import { useState, useEffect } from 'react';
import Input from '../../../UI/Input/Input';

const Dvd = ({ checkIsValid, onInvalid }) => {
  const [dvd, setDvd] = useState('');

  const dvdChangeHandler = event => {
    setDvd(event.target.value);
  };

  useEffect(() => {
    checkIsValid(dvd.trim().length > 0);
  }, [dvd]);

  return (
    <Input
      onChange={dvdChangeHandler}
      id='size'
      type='text'
      label='Size (MB)'
      value={dvd}
      pattern='[a-zA-Z0-9-]+'
      onInvalid={onInvalid}
    />
  );
};

export default Dvd;
