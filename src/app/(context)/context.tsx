'use client';

import React from 'react';
import { ProductInfo } from '../ui/product-item';

export const ThemeContext = React.createContext({
  listOfCheckoutProducts: [],
  addProductToCart: ({ product }: { product: ProductInfo }) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const listOfCheckoutProducts: any = [];

  const addProductToCart = ({ product }: { product: ProductInfo }) => {
    listOfCheckoutProducts.push(product);
  };
  return (
    <ThemeContext.Provider value={{ listOfCheckoutProducts, addProductToCart }}>
      {children}
    </ThemeContext.Provider>
  );
};
