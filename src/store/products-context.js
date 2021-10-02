import React from 'react';

const ProductsContext = React.createContext({
  products: [],
  listProdToDelete: [],
  deleteDisabled: null,
  addProductToDelete: SKU => {},
  removeProductFromDelete: SKU => {},
  deleteProducts: () => {},
});

export default ProductsContext;
