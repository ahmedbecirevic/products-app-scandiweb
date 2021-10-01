import React from 'react';

const ProductsContext = React.createContext({
  products: [],
  books: [],
  furniture: [],
  dvds: [],
  listProdToDelete: [],
  deleteDisabled: null,
  addProductToDelete: SKU => {},
  removeProductFromDelete: SKU => {},
  deleteProducts: () => {},
});

export default ProductsContext;
