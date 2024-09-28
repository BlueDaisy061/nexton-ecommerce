'use client';

import { Breadcrumb } from 'antd';
import { ProductContext } from '../(context)/context';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { QuantityPicker } from '../ui/quantityPicker';

export default function CheckoutPage() {
  const [listOfStoreProducts, setListOfStoreProducts] = useState([]);

  useEffect(() => {
    setListOfStoreProducts(JSON.parse(localStorage.getItem('checkoutProducts') || '[]'));
  }, []);

  let { listOfCheckoutProducts } = React.useContext(ProductContext);

  const handleDecreaseQuantity = (product: any) => {
    if (product.quantity === 0) {
      // implement pop-up
    }
    if (product > 1) {
      product.quantity--;
    }
  };

  const handleIncreaseQuantity = (product: any) => {
    if (product.quantity < 999) {
      product.quantity++;
    }
    console.log(product);
  };

  const handleOnChangeQuantity = (newQuantity: number, product: any) => {
    if (newQuantity <= 999) {
      product.quantity = newQuantity;
    }
  };

  return (
    <div className="pt-[4.5rem] my-10 mx-6 md:mx-[3.5rem] md:mb-20 lg:mx-[4.5rem]">
      <div className="hidden lg:block">
        <h2 className="mb-3">Checkout</h2>
        <Breadcrumb
          items={[
            {
              title: (
                <Link href="/">
                  <p className="text-body-text font-medium">Homepage</p>
                </Link>
              ),
            },
            {
              title: <p className="text-body-text font-medium">Checkout</p>,
            },
          ]}
        />
      </div>
      <div>
        <h3>Order summary</h3>
        <hr className="text-border mt-6" />
        {listOfStoreProducts.length > 0 ? (
          <div>
            {listOfStoreProducts.map((product: any, id: any) => (
              <div key={id}>
                <div className="flex gap-3 py-6">
                  <input
                    type="image"
                    src={'/product-detail-1.png'}
                    alt={'/product-detail-1'}
                    className={'w-24 rounded-xl'}
                  />
                  <div className="w-full flex flex-col justify-between">
                    <div>
                      <h5>{product.productName}</h5>
                      <p>Size: {product.productSize}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <>
                        {product.productSalePrice ? (
                          <div>
                            <h5>${product.productSalePrice.toFixed(2)}</h5>
                            <p className="line-through">${product.productPrice.toFixed(2)}</p>
                          </div>
                        ) : (
                          <h5>${product.productPrice.toFixed(2)}</h5>
                        )}
                      </>
                      <QuantityPicker
                        initQuantity={product.quantity}
                        onDecrease={() => handleDecreaseQuantity(product)}
                        onIncrease={() => handleIncreaseQuantity(product)}
                        onChangeProductQuantity={(e) =>
                          handleOnChangeQuantity(Number(e.target.value), product)
                        }
                      />
                    </div>
                  </div>
                </div>
                <hr className="text-border" />
              </div>
            ))}
          </div>
        ) : (
          <p className="my-6">No product in cart. Continue shopping?</p>
        )}
      </div>
    </div>
  );
}
