import Image from 'next/image';

import { Carousel } from './ui/carousel';

export default function Home() {
  return (
    <div className="pt-20">
      <div className="md:relative">
        <Image
          alt="Hero-bg"
          src="/hero-bg.svg"
          width={0}
          height={0}
          className="w-auto height-auto hidden md:block"
        />
        <Carousel />
      </div>
    </div>
  );
}
