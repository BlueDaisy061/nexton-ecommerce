'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { PrimaryButton } from './button';
import Link from 'next/link';

export const Carousel = () => {
  return (
    <div className="carousel carousel-center w-full md:w-1/2 md:z-1 md:absolute md:top-12">
      <div className="carousel-item w-full h-[480px] bg-gray relative md:bg-transparent">
        <div className="px-6 py-8 flex items-center md:pl-20">
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
      <div className="carousel-item w-full h-[480px] bg-gray relative md:bg-transparent">
        <div className="px-6 py-8 flex items-center md:pl-20">
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
      <div className="carousel-item w-full h-[480px] bg-gray relative md:bg-transparent">
        <div className="px-6 py-8 flex items-center md:pl-20">
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
    </div>
  );
};

{
  /* <div className="w-full h-[70px] px-6 py-8 flex gap-1 bg-gray absolute bottom-0">
          <div
            className={
              slide.id === 1
                ? 'w-8 h-[6px] bg-primary-color rounded-full'
                : 'w-[6px] h-[6px] bg-body-text rounded-full'
            }
          ></div>
          <div
            className={
              slide.id === 2
                ? 'w-8 h-[6px] bg-primary-color rounded-full'
                : 'w-[6px] h-[6px] bg-body-text rounded-full'
            }
          ></div>
          <div
            className={
              slide.id === 3
                ? 'w-8 h-[6px] bg-primary-color rounded-full'
                : 'w-[6px] h-[6px] bg-body-text rounded-full'
            }
          ></div>
        </div> */
}
