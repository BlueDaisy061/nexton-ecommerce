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
  const productDetail = productsDetail.find((product) => product.id === productId);

  const [imageDisplay, setImageDisplay] = useState<number>(1);
  const [size, setSize] = useState<string | undefined>(productDetail?.availableSizes[0]);
  const [quantity, setQuantity] = useState<number>(0);

  // should fetch product detail

  return (
    <div className="pt-[4.5rem] my-10 mx-6 md:mx-[3.5rem] md:mb-20 lg:mx-[4.5rem]">
      {/* Product display */}
      <div>
        {/* Product display images */}
        <ProductItem
          product={{ ...product, image: `/product-detail-${imageDisplay}.png` }}
          showDetail={false}
        />
        <div className="w-full flex flex-row justify-between gap-4">
          {[1, 2, 3, 4].map((id) => {
            return (
              <div key={id} className="w-full" onClick={() => setImageDisplay(id)}>
                <input
                  type="image"
                  src={`/product-detail-${id}.png`}
                  alt={`/product-detail-${id}`}
                  className={`w-full rounded-xl ${
                    id === imageDisplay ? 'border border-vibrant' : ''
                  }`}
                />
              </div>
            );
          })}
        </div>
        {/* Product info and add to cart */}
        <div className="my-10 flex flex-col gap-8">
          <div className="grid gap-6">
            <h2>{product.productName}</h2>
            <div>
              <h2>{product.salePrice}</h2>
              <h5 className="text-body-text line-through">{product.price}</h5>
            </div>
            <div className="flex gap-1">
              <StarIcon className="w-5 h5 text-yellow" />
              <p>
                {product.rate} ({product.numberOfFeedbacks})
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            <h4>Size: {size}</h4>
            <div className="grid grid-cols-4 gap-3 lg:grid-cols-5">
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
          <div className="flex justify-between">
            <div className="flex gap-3 items-center px-3 rounded-full bg-body-text/5">
              <button
                className="rounded-full flex items-center justify-center border bg-default border-border w-5 h-5"
                onClick={() => {
                  if (quantity !== 0) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="rounded-full flex items-center justify-center border bg-default border-border w-5 h-5"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <PrimaryButton
              title={'Add to cart'}
              leftIcon={<ShoppingBagIcon className="w-4 h-4" />}
            />
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
