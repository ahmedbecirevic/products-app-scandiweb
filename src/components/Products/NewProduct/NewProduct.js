import { useState, useReducer } from 'react';
import Input from '../../UI/Input/Input';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './NewProduct.module.css';

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
    setProductType(event.target.value);
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
        <Input label='SKU' id='sku'></Input>
        <Input label='Name' id='name'></Input>
        <Input label='Price ($)' id='price'></Input>
        <div>
          <select
            onChange={productTypeHandler}
            id='productType'
            className={classes['type-select']}
          >
            <option value='' style={{ display: 'none' }}>
              Product Type
            </option>
            <option value='FURN'>Furniture</option>
            <option value='DVD'>DVD</option>
            <option value='BOOK'>Book</option>
          </select>
        </div>
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
