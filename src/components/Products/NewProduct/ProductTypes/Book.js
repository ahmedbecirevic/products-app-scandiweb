import { useState, useEffect } from 'react';
import Input from '../../../UI/Input/Input';

const Book = ({ checkIsValid, onInvalid }) => {
  const [book, setBook] = useState('');

  const bookChangeHandler = event => {
    setBook(event.target.value);
  };

  useEffect(() => {
    checkIsValid(book.trim().length > 0);
  }, [book]);

  return (
    <>
      <Input
        onChange={bookChangeHandler}
        id='weight'
        type='text'
        label='Weight (KG)'
        value={book}
        pattern='([0-9]+\.?[0-9]*|\.[0-9]+)$'
      />
      <p>Please, provide weight in kilograms!</p>
    </>
  );
};

export default Book;
