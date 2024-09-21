'use client';
import { productsDetail } from '@/app/lib/product-detail';
import { products } from '@/app/lib/products';
import { PrimaryButton } from '@/app/ui/button';
import { ProductItem } from '@/app/ui/product-item';
import { StarIcon } from '@heroicons/react/16/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function ProductPage() {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  const product = products.find((product) => product.id === productId);
  if (!product) {
    throw new Error('404 - No product found.');
  }
  // should fetch product detail
  const productDetail = productsDetail.find((product) => product.id === productId);

  const [imageDisplay, setImageDisplay] = useState<number>(1);
  const [size, setSize] = useState<string | undefined>(productDetail?.availableSizes[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const productPrice = product.salePrice || product.price;
  const productTax = (productDetail?.tax || 0) * productPrice;

  const handleProductQuantity = (theQuantity: number) => {
    if (theQuantity <= 999) {
      setQuantity(theQuantity);
    }
  };

  return (
    <div className="pt-[4.5rem] my-10 mx-6 md:mx-[3.5rem] md:mb-20 lg:mx-[4.5rem]">
      <div className="lg:flex lg:flex-row lg:gap-8 lg:h-[80vh]">
        {/* Product display */}
        <div className="lg:flex lg:flex-row-reverse lg:gap-6">
          {/* Product display images */}
          <ProductItem
            product={{ ...product, image: `/product-detail-${imageDisplay}.png` }}
            showDetail={false}
          />
          <div className="w-full flex flex-row justify-between gap-4 mt-5 lg:flex-col lg:w-[20%] lg:gap-4 lg:justify-between lg:mt-0">
            {Array.from({ length: 4 }, (_, id) => {
              return (
                <div key={id} className="w-full" onClick={() => setImageDisplay(id + 1)}>
                  <input
                    type="image"
                    src={`/product-detail-${id + 1}.png`}
                    alt={`/product-detail-${id + 1}`}
                    className={`w-full rounded-xl ${
                      id + 1 === imageDisplay ? 'border border-vibrant' : ''
                    }`}
                  />
                </div>
              );
            })}
          </div>
          {/* Product info and add to cart */}
        </div>
        <div className="my-10 flex flex-col gap-8 lg:w-[50%] lg:border lg:border-border lg:rounded-3xl lg:p-8 lg:my-0">
          <div className="grid gap-6 lg:gap-8">
            <h2 className="lg:text-3xl">{product.productName}</h2>
            <div className="flex flex-col gap-6 lg:flex-row-reverse lg:justify-between">
              <div>
                <h3>{product.salePrice}</h3>
                <h5 className="text-body-text line-through">{product.price}</h5>
              </div>
              <div className="flex gap-1">
                <StarIcon className="w-5 h-5 text-yellow" />
                <p>
                  {product.rate} ({product.numberOfFeedbacks})
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <h4>Size: {size}</h4>
            <div className="grid grid-cols-4 gap-3 md:grid-cols-5 lg:grid-cols-4">
              {productDetail?.availableSizes.map((productSize, id) => {
                return (
                  <button
                    key={id}
                    className={`${
                      size === productSize
                        ? 'bg-vibrant text-default'
                        : 'border border-body-text/15 text-primary-color'
                    } rounded-xl py-2`}
                    onClick={() => setSize(productSize)}
                  >
                    {productSize}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between lg:items-center">
            <div className="flex gap-3 items-center px-3 rounded-full bg-body-text/5 lg:h-[80%]">
              <button
                className="rounded-full flex items-center justify-center border bg-default border-border w-5 h-5"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="w-7 text-sm text-center bg-border/5 placeholder:bg-gray focus:outline-none"
                onChange={(e) => handleProductQuantity(Number(e.target.value))}
              />
              <button
                className="rounded-full flex items-center justify-center border bg-default border-border w-5 h-5"
                onClick={() => {
                  if (quantity < 999) {
                    setQuantity(quantity + 1);
                  }
                }}
              >
                +
              </button>
            </div>
            <PrimaryButton
              title={'Add to cart'}
              leftIcon={<ShoppingBagIcon className="w-4 h-4" />}
              style="hover:drop-shadow-xl"
            />
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex justify-between">
                <p>
                  ${productPrice} x {quantity}
                </p>
                <p>${productPrice * quantity}</p>
              </div>
              <div className="flex justify-between">
                <p>Tax estimate</p>
                <p>${(productTax * quantity).toFixed(2)}</p>
              </div>
            </div>
            <hr className="text-border" />
            <div className="flex justify-between">
              <h5>Total</h5>
              <h5>${((productPrice + productTax) * quantity).toFixed(2)}</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Product detail text */}
      <div></div>
      {/* Recommended products */}
      <div></div>
    </div>
  );
}
