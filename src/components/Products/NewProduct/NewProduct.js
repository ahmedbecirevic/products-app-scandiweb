import { useEffect, useState } from 'react';
import Input from '../../UI/Input/Input';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './NewProduct.module.css';
import Dvd from './ProductTypes/Dvd';
import Book from './ProductTypes/Book';
import Furniture from './ProductTypes/Furniture';
import Alert from '@mui/material/Alert';

const NewProduct = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [prodTypeIsValid, setProdTypeIsValid] = useState(false);
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState('');
  const [productType, setProductType] = useState(undefined);
  const [showError, setShowError] = useState(false);

  const skuChangeHandler = event => {
    setSku(event.target.value);
  };
  const nameChangeHandler = event => {
    setName(event.target.value);
  };
  const priceChangeHandler = event => {
    setPrice(event.target.value);
  };

  // handle dropdown product type selection
  const productTypeHandler = event => {
    switch (event.target.value) {
      case 'DVD':
        setProductType(<Dvd checkIsValid={productTypeValidHandler} />);
        break;
      case 'BOOK':
        setProductType(<Book checkIsValid={productTypeValidHandler} />);
        break;
      case 'FURN':
        setProductType(<Furniture checkIsValid={productTypeValidHandler} />);
        break;
      default:
        break;
    }
  };

  // handle form submission func
  const submitHandler = event => {
    event.preventDefault();
    setShowError(!formIsValid || !prodTypeIsValid);
    if (formIsValid && prodTypeIsValid) {
      // pass the data from reducer to API and ctx
      console.log('All Good!');
      setSku('');
      setName('');
      setPrice('');
    }
  };

  useEffect(() => {
    setFormIsValid(
      name.trim().length > 0 && sku.trim().length > 0 && price.trim().length > 0
    );
  }, [name, price, sku]);

  const productTypeValidHandler = isValid => {
    setProdTypeIsValid(isValid);
  };

  return (
    <Card className={classes['new-product']}>
      {showError && (
        <Alert severity='error'>Please, submit required data</Alert>
      )}
      <form onSubmit={submitHandler}>
        <Input
          type='text'
          label='SKU'
          id='sku'
          onChange={skuChangeHandler}
          value={sku}
        />
        <Input
          type='text'
          label='Name'
          id='name'
          onChange={nameChangeHandler}
          value={name}
        />
        <Input
          type='text'
          label='Price ($)'
          id='price'
          onChange={priceChangeHandler}
          value={price}
        />
        <label htmlFor='productType'>Type Switcher</label>
        <select
          onChange={productTypeHandler}
          id='productType'
          className={classes['type-select']}
        >
          <option value='' style={{ display: 'none' }}>
            Product Type
          </option>
          <option id='Furniture' value='FURN'>
            Furniture
          </option>
          <option id='DVD' value='DVD'>
            DVD
          </option>
          <option id='Book' value='BOOK'>
            Book
          </option>
        </select>
        <div>{productType}</div>
        <div className={classes.actions}>
          <Button type='submit' className={classes['btn-add']}>
            Add Product
          </Button>
          <Button type='reset' className={classes['btn-cancel']}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default NewProduct;
