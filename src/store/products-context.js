import React from 'react';

const ProductsContext = React.createContext({
  products: [],
  listProdToDelete: [],
  addProductToDelete: SKU => {},
  removeProductFromDelete: SKU => {},
  deleteProducts: () => {},
});

export default ProductsContext;
