import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import ProductsContext from '../../../store/products-context';
import Input from '../../UI/Input/Input';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './NewProduct.module.css';
import Dvd from './ProductTypes/Dvd';
import Book from './ProductTypes/Book';
import Furniture from './ProductTypes/Furniture';
import Alert from '@mui/material/Alert';
import axios from 'axios';

const NewProduct = () => {
  // context
  const productsCtx = useContext(ProductsContext);
  // state
  const [formIsValid, setFormIsValid] = useState(false);
  const [prodTypeIsValid, setProdTypeIsValid] = useState(false);
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState('');
  const [productType, setProductType] = useState({
    comp: undefined,
    type: undefined,
  });
  const [selectedProd, setSelectedProd] = useState('');
  const [showError, setShowError] = useState(false);
  const [saveDisabled, setSaveDisabled] = useState(false);
  // api path
  const { REACT_APP_HOST } = process.env;
  const history = useHistory();

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
        setProductType({
          comp: (
            <Dvd
              checkIsValid={productTypeValidHandler}
              getState={dvd => setSelectedProd(dvd)}
            />
          ),
          type: 'DVD',
        });
        break;
      case 'BOOK':
        setProductType({
          comp: (
            <Book
              checkIsValid={productTypeValidHandler}
              getState={book => setSelectedProd(book)}
            />
          ),
          type: 'BOOK',
        });
        break;
      case 'FURN':
        setProductType({
          comp: (
            <Furniture
              checkIsValid={productTypeValidHandler}
              getState={furniture => setSelectedProd(furniture)}
            />
          ),
          type: 'FURN',
        });
        break;
      default:
        break;
    }
  };

  // erase all values for product adding
  const onCancelHandler = () => {
    setProductType({
      comp: undefined,
      type: undefined,
    });
    setSku('');
    setPrice('');
    setName('');
  };

  // handle form submission func
  const submitHandler = event => {
    event.preventDefault();
    setShowError(!formIsValid || !prodTypeIsValid);
    if (formIsValid && prodTypeIsValid) {
      // disable save button
      setSaveDisabled(true);
      // pass the data from reducer to API and ctx
      const product = {
        SKU: sku,
        name: name,
        price: price,
        prod_attribute: selectedProd,
        type: productType.type,
      };
      axios
        .post(`${REACT_APP_HOST}/products`, product)
        .then(res => {
          productsCtx.addNewProduct(res.data);
          setSaveDisabled(false);
          history.push(`/`);
        })
        .catch(err => console.log(err));
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
          pattern='[A-Z0-9]+'
        />
        <Input
          type='text'
          label='Name'
          id='name'
          onChange={nameChangeHandler}
          value={name}
          pattern='^[A-Za-z0-9 _]+'
        />
        <Input
          type='text'
          label='Price ($)'
          id='price'
          onChange={priceChangeHandler}
          value={price}
          pattern='([0-9]+\.?[0-9]*|\.[0-9]+)$'
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
        <div className={`${productType.comp ? classes['product-type'] : ''}`}>
          {productType.comp}
        </div>
        <div className={classes.actions}>
          <Button
            type='submit'
            className={classes['btn-add']}
            disabled={saveDisabled}
          >
            Save
          </Button>
          <Button
            type='reset'
            onClick={onCancelHandler}
            className={classes['btn-cancel']}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default NewProduct;
