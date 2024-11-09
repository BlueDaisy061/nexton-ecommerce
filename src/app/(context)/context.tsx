'use client';

import React, { useState } from 'react';

export const ProductContext = React.createContext<{
  listOfCheckoutProducts: any[];
  addProductToCart: (product: any) => void;
  isLoggedIn: boolean;
  loggedInHandler: () => void;
}>({
  listOfCheckoutProducts: [],
  addProductToCart: (product) => {},
  isLoggedIn: false,
  loggedInHandler: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [listOfCheckoutProducts, setListOfCheckoutProducts] = useState<any>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const addProductToCart = (product: any) => {
    let existingProduct;
    if (listOfCheckoutProducts.length > 0) {
      existingProduct = listOfCheckoutProducts.find(
        (p: any) => p.productId === product.productId && p.productSize === product.productSize
      );
    }

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
      return;
    }
    listOfCheckoutProducts.push(product);
  };

  const loggedInHandler = () => (isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true));

  return (
    <ProductContext.Provider
      value={{ listOfCheckoutProducts, addProductToCart, isLoggedIn, loggedInHandler }}
    >
      {children}
    </ProductContext.Provider>
  );
};
