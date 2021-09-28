import React from 'react';

const ProductsContext = React.createContext({
  listProdToDelete: [],
  addProductToDelete: SKU => {},
  removeProductFromDelete: SKU => {},
  deleteProducts: () => {},
});

export default ProductsContext;
