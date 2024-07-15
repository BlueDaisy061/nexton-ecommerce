import Image from 'next/image';

import { CarouselWrapper } from './ui/carousel';

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
      <div>
        <div className="md:hidden">
          <h4>Nexton® always with you</h4>
        </div>
      </div>
    </div>
  );
}
