import Image from 'next/image';

import { CarouselWrapper } from './ui/carousel';
import { FeatureCard } from './ui/featureCard';
import { websiteFeatures } from './lib/constants';

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
    </div>
  );
}
