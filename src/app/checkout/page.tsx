'use client';

import { Breadcrumb, Input } from 'antd';
import React, { useState } from 'react';
import Link from 'next/link';
import { QuantityPicker } from '../ui/quantityPicker';
import { FormCard } from '../ui/form-card';
import { UserCircleIcon, MapPinIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { PrimaryButton } from '../ui/button';

export default function CheckoutPage() {
  const [listOfStoreProducts, setListOfStoreProducts] = useState<any>(
    // JSON.parse(localStorage.getItem('checkoutProducts') || '[]')
    []
  );

  const setQuantity = (product: any, amount: number) => {
    if (product.quantity === 1 && amount === -1) {
      return;
    }

    setListOfStoreProducts((listOfStoreProducts: any) =>
      listOfStoreProducts.map((item: any) =>
        item.productId === product.productId &&
        item.productSize === product.productSize &&
        product.quantity >= 1 &&
        product.quantity <= 999
          ? {
              ...item,
              quantity: item.quantity + amount,
            }
          : item
      )
    );
    // localStorage.setItem('checkoutProducts', JSON.stringify(listOfStoreProducts));
  };

  const handleOnChangeQuantity = (newQuantity: number, product: any) => {
    if (newQuantity <= 999) {
      setListOfStoreProducts((listOfStoreProducts: any) =>
        listOfStoreProducts.map((item: any) =>
          item.productId === product.productId
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item
        )
      );
    }
    // localStorage.setItem('checkoutProducts', JSON.stringify(listOfStoreProducts));
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
      <div className="grid gap-20 lg:grid-cols-2 lg:mt-12 lg:gap-10">
        <div className="lg:order-2">
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
                          onDecrease={() => setQuantity(product, -1)}
                          onIncrease={() => setQuantity(product, 1)}
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
        <div className="lg:order-first lg:grid-rows-subgrid row-span-4">
          <h3 className="mb-7 lg:hidden">Shipping details</h3>
          <form action="" className="flex flex-col gap-7">
            <FormCard title="CONTACT INFO" prefix={<UserCircleIcon />}>
              <div className="flex flex-col gap-6">
                <div>
                  <h5 className="mb-2">Your phone number</h5>
                  <Input size="large" />
                </div>
                <div>
                  <h5 className="mb-2">Email address</h5>
                  <Input size="large" />
                </div>
              </div>
            </FormCard>
            <FormCard title="SHIPPING ADDRESS" prefix={<MapPinIcon />}>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div>
                    <h5 className="mb-2">First name</h5>
                    <Input size="large" />
                  </div>
                  <div>
                    <h5 className="mb-2">Last name</h5>
                    <Input size="large" />
                  </div>
                </div>
                <div>
                  <h5 className="mb-2">Address line 1</h5>
                  <Input size="large" />
                </div>
                <div>
                  <h5 className="mb-2">Apt, Suite</h5>
                  <Input size="large" />
                </div>
                <div className="flex gap-4">
                  <div>
                    <h5 className="mb-2">City</h5>
                    <Input size="large" />
                  </div>
                  <div>
                    <h5 className="mb-2">Country</h5>
                    <Input size="large" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <h5 className="mb-2">State/Province</h5>
                    <Input size="large" />
                  </div>
                  <div>
                    <h5 className="mb-2">Postal code</h5>
                    <Input size="large" />
                  </div>
                </div>
              </div>
            </FormCard>
            <FormCard title="PAYMENT" prefix={<CreditCardIcon />}>
              <div className="flex flex-col gap-6">
                <div>
                  <h5 className="mb-2">Card number</h5>
                  <Input size="large" />
                </div>
                <div>
                  <h5 className="mb-2">Name on the card</h5>
                  <Input size="large" />
                </div>
                <div className="flex gap-4">
                  <div>
                    <h5 className="mb-2">Expiration date</h5>
                    <Input size="large" />
                  </div>
                  <div>
                    <h5 className="mb-2">CVC</h5>
                    <Input size="large" />
                  </div>
                </div>
              </div>
            </FormCard>
          </form>
        </div>
        <div className="lg:order-3 lg:col-start-2">
          <div className="flex flex-col gap-6">
            <h3 className="lg:hidden">Confirm your order</h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$TODO</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping estimate</p>
                <p>$TODO</p>
              </div>
              <div className="flex justify-between">
                <p>Tax estimate</p>
                <p>$TODO</p>
              </div>
            </div>
            <div className="flex justify-between">
              <h5>Order total</h5>
              <h5>$TODO</h5>
            </div>
          </div>
          <PrimaryButton style="mt-8 w-full" title="Confirm order" />
        </div>
      </div>
    </div>
  );
}
