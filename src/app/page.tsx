import Image from 'next/image';

import { CarouselWrapper } from './ui/carousel';
import { FeatureCard } from './ui/featureCard';
import { collection, websiteFeatures } from './lib/constants';
import { Collection } from './ui/collection';
import { CollectionCard } from './ui/collection-card';

export default function Home() {
  return (
    <div className="pt-[4.5rem]">
      <div className="md:relative">
        <Image
          alt="Hero-bg"
          src="/hero-bg.svg"
          width={0}
          height={0}
          className="w-auto height-auto hidden md:block"
        />
        <CarouselWrapper />
      </div>
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
          <div className="flex justify-center md:gap-3 lg:gap-5">
            {collection.map((item, key) => (
              <CollectionCard title={item.title} description={item.description} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
