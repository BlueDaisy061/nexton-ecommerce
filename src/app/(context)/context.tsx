'use client';

import React, { useState } from 'react';

export const ProductContext = React.createContext<{
  listOfCheckoutProducts: any[];
  addProductToCart: (product: any) => void;
}>({ listOfCheckoutProducts: [], addProductToCart: (product) => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [listOfCheckoutProducts, setListOfCheckoutProducts] = useState<any>([]);

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

  return (
    <ProductContext.Provider value={{ listOfCheckoutProducts, addProductToCart }}>
      {children}
    </ProductContext.Provider>
  );
};
