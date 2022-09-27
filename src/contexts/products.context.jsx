import { createContext, useState, useEffect } from 'react';

import shopData from '../shopData.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    setProducts(shopData);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
