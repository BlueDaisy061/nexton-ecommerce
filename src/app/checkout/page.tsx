'use client';

import { Breadcrumb } from 'antd';
import { ProductContext } from '../(context)/context';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const { listOfCheckoutProducts } = React.useContext(ProductContext);
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
        <div className="border border-t-border border-b-border">
          {listOfCheckoutProducts.map((product, id) => (
            <div key={id}>
              <Image src={'/product-detail-1.png'} alt={'checkout-product-image'} />
              <div>{product.productName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
