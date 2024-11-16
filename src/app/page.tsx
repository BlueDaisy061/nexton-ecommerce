'use client';

import Image from 'next/image';

import { CarouselWrapper } from './ui/carousel';
import { FeatureCard } from './ui/featureCard';
import { collection, websiteFeatures, carouselSettings } from './lib';
import { products } from './lib/products';
import { Collection } from './ui/collection';
import { CollectionCard } from './ui/collection-card';
import { ProductItem } from './ui/product-item';
import { Carousel } from 'antd';
import { PrimaryButton } from './ui/button';
import { ProductListCarousel } from './ui/product-list-carousel';
import Link from 'next/link';
import { useContext } from 'react';
import { ProductContext } from './(context)/context';

export default function Home() {
  const { allProducts } = useContext(ProductContext);

  return (
    <div className="pt-[4.5rem]">
      <div className="w-full h-auto bg-banner-gray md:flex md:justify-between md:items-center">
        <Image
          alt="Hero-bg"
          src="/hero-bg.svg"
          width={0}
          height={0}
          className="w-full height-auto hidden md:block"
        />
        <CarouselWrapper />
      </div>
      {/* Company feature section */}
      <div className="py-12 px-6 md:py-12 md:mx-[2rem] lg:px-0 lg:mx-[5rem]">
        <div className="md:hidden">
          <h5>Nexton® always with you</h5>
        </div>
        <div className="w-full px-10 py-6 overflow-hidden lg:border lg:border-body-text lg:border-opacity-15 lg:rounded-2xl">
          <div className="flex justify-between animate-textSm md:animate-textMd lg:animate-none">
            {websiteFeatures.map((feature, key) => (
              <FeatureCard
                key={key}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Collection section */}
      <div className="py-12 px-6 lg:py-20 md:px-[3.5rem] lg:px-[5rem]">
        <div className="flex mb-6 md:mb-10">
          <h2>Start exploring.</h2>
          <h2 className="hidden md:block md:ml-2 md:text-body-text">
            Good things are waiting for you
          </h2>
        </div>
        <div className="block md:hidden">
          <Collection />
        </div>
        <div className="hidden md:block">
          <div className="flex justify-between gap-5">
            {collection.map((item, key) => (
              <CollectionCard title={item.title} description={item.description} key={key} />
            ))}
          </div>
        </div>
      </div>
      {/* Recommendation products section */}
      <div className="py-12 px-6 lg:py-20 md:px-[3.5rem] lg:px-[5rem]">
        <div className="flex mb-6 md:mb-10">
          <h2>Recommendation.</h2>
          <h2 className="hidden md:block md:ml-2 md:text-body-text">
            Best matching products for you
          </h2>
        </div>
        <div>
          <ProductListCarousel products={allProducts} />
        </div>
      </div>
      {/* Best sellers section */}
      <div className="py-12 px-6 lg:py-20 md:px-[3.5rem] lg:px-[5rem]">
        <div className="flex mb-6 md:mb-10">
          <h2>Best Sellers.</h2>
          <h2 className="hidden md:block md:ml-2 md:text-body-text">Best selling of the month</h2>
        </div>
        <div>
          <Carousel autoplay {...carouselSettings}>
            {allProducts.map((product, key) => (
              <Link href={`/product/${product.id}`} key={key} className="px-2">
                <ProductItem product={product} />
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Banner section */}
      <div className="py-12 px-6 hidden md:px-[3.5rem] lg:block lg:py-20 lg:px-[5rem]">
        <div className="w-auto h-[28rem] bg-banner-gray rounded-3xl">
          <div className="flex justify-between">
            <div className="py-24 px-28">
              <h4 className="text-body-text mb-[14px]">100% Original Products</h4>
              <h2 className="mb-6">The All New Fashion Collection Items</h2>
              <h4 className="text-body-text mb-6">Starting from: $59.99</h4>
              <PrimaryButton title={'Shop now'} style="drop-shadow-md" />
            </div>
            <Image
              src={'/banner-bg-image.svg'}
              alt={'banner-bg-image'}
              width={0}
              height={0}
              className="w-auto h-[28rem] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
