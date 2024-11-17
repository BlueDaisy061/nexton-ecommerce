'use client';

import React, { useEffect, useState } from 'react';
import { ProductBasicType } from '../(types)/product';

export const ProductContext = React.createContext<{
  listOfCheckoutProducts: any[];
  addProductToCart: (product: any) => void;
  isLoggedIn: boolean;
  loggedInHandler: () => void;
  allProducts: ProductBasicType[];
}>({
  listOfCheckoutProducts: [],
  addProductToCart: (product) => {},
  isLoggedIn: false,
  loggedInHandler: () => {},
  allProducts: [],
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [listOfCheckoutProducts, setListOfCheckoutProducts] = useState<any>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [allProducts, setAllProducts] = useState([]);

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

  useEffect(() => {
    fetch('http://localhost:4000/product/all-products', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  console.log(allProducts);
  const loggedInHandler = () => (isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true));

  return (
    <ProductContext.Provider
      value={{ listOfCheckoutProducts, addProductToCart, isLoggedIn, loggedInHandler, allProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
