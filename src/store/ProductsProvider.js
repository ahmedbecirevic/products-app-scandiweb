import axios from 'axios';
import ProductsContext from './products-context';

const ProductsProvider = () => {
  const { REACT_APP_HOST } = process.env;

  const deleteProductsHandler = listOfSKU => {
    axios.delete(`${REACT_APP_HOST}api/products`, {
      data: {
        listOfSKU,
      },
    });
  };

  const productsContext = {
    products: [],
    deleteProducts: deleteProductsHandler,
  };
  return (
    <ProductsContext.ProductsProvider
      value={productsContext}
    ></ProductsContext.ProductsProvider>
  );
};

export default ProductsProvider;
