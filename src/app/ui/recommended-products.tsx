import { Carousel } from 'antd';
import { carouselSettings, products } from '../lib';
import React from 'react';
import Link from 'next/link';
import { ProductItem } from './product-item';

export const RecommendedProducts = () => {
  return (
    <Carousel autoplay {...carouselSettings} className="flex justify-between gap-5">
      {products.map((product, key) => (
        <Link href={`/product/${product.id}`} key={key} className="px-2">
          <ProductItem product={product} />
        </Link>
      ))}
    </Carousel>
  );
};
