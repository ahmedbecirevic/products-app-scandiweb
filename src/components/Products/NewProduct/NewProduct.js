import { useState, useReducer } from 'react';
import Input from '../../UI/Input/Input';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './NewProduct.module.css';
import Dvd from './ProductTypes/Dvd';
import Book from './ProductTypes/Book';
import Furniture from './ProductTypes/Furniture';

const productFormReducer = (state, action) => {};

const NewProduct = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [productType, setProductType] = useState(undefined);
  const [productFormState, dispatchProductForm] = useReducer(
    productFormReducer,
    {
      sku: '',
      name: '',
      price: '',
      type: '',
      attribute: '',
      isSkuValid: undefined,
      isNameValid: undefined,
      isPriceValid: undefined,
      isTypeValid: undefined,
    }
  );

  // handle dropdown product type selection
  const productTypeHandler = event => {
    switch (event.target.value) {
      case 'DVD':
        setProductType(<Dvd />);
        break;
      case 'BOOK':
        setProductType(<Book />);
        break;
      case 'FURN':
        setProductType(<Furniture />);
        break;
      default:
        break;
    }
  };

  // handle form submission func
  const submitHandler = event => {
    event.preventDefault();
    console.log('hello');
    if (formIsValid) {
      // pass the data from reducer to API and ctx
    }
  };

  return (
    <Card className={classes['new-product']}>
      <form onSubmit={submitHandler}>
        <Input label='SKU' id='sku' />
        <Input label='Name' id='name' />
        <Input label='Price ($)' id='price' />
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
        {productType}
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
