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
    <>
      <Input
        onChange={dvdChangeHandler}
        id='size'
        type='text'
        label='Size (MB)'
        value={dvd}
        pattern='([0-9]+\.?[0-9]*|\.[0-9]+)$'
      />
      <p>Please, provide size in MegaBytes!</p>
    </>
  );
};

export default Dvd;
