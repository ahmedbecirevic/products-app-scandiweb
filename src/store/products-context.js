import React from 'react';

const ProductsContext = React.createContext({
  products: [],
  listProdToDelete: [],
  deleteDisabled: val => {},
  addProductToDelete: SKU => {},
  removeProductFromDelete: SKU => {},
  deleteProducts: () => {},
  addProducts: products => {},
  addNewProduct: product => {},
  removeProducts: () => {},
});

export default ProductsContext;
