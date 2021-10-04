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
    <Input
      onChange={bookChangeHandler}
      id='weight'
      type='text'
      label='Weight (KG)'
      value={book}
      pattern='[a-zA-Z0-9-]+'
      onInvalid={onInvalid}
    />
  );
};

export default Book;
