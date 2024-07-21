'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PrimaryButton } from './button';
import Link from 'next/link';
import { Carousel } from 'antd';

export const CarouselWrapper = () => {
  return (
    <div className="w-full bg-gray md:w-2/3 md:ml-[2rem] md:z-1 md:absolute md:top-[20%] md:bg-opacity-0 lg:w-1/2 lg:ml-[4rem]">
      <Carousel autoplay>
        <div className="w-full h-[480px] md:h-[240px] lg:h-[460px] relative">
          <div className="px-6 py-8 absolute md:top-0">
            <div>
              <p className="mb-2">Starting from: $49.99</p>
              <h1 className="mb-10">Exclusive collection for everyone</h1>
              <Link href={'/shop'}>
                <PrimaryButton
                  title={'Explore now'}
                  rightIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[480px] md:h-[240px] lg:h-[460px] relative">
          <div className="px-6 py-8 absolute top-[20%] md:top-0">
            <div>
              <p className="mb-2">Newly collection out now</p>
              <h1 className="mb-10">Our unique design for this season</h1>
              <PrimaryButton
                title={'Explore now'}
                rightIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[480px] md:h-[240px] lg:h-[460px] relative">
          <div className="px-6 py-8 absolute top-[20%] md:top-0">
            <div>
              <p className="mb-2">Super sale up to: 70%</p>
              <h1 className="mb-10">Mid-year sale from 20/6 to 30/6</h1>
              <PrimaryButton
                title={'Explore now'}
                rightIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
