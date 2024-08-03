import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export const CollectionCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="h-40 w-full rounded-lg md:h-28">
      <div className="bg-gray h-32 rounded-lg flex justify-between items-center px-6 py-10 md:h-28 md:px-5 md:py-5 lg:px-10">
        <div>
          <h4 className="block md:hidden lg:block">{title}</h4>
          <p className="sm:hidden lg:hidden font-semibold">{title}</p>
          <p>{description}</p>
        </div>
        <Link
          className="flex border-l-4 border-body-text border-opacity-10 h-8 px-3 py-2"
          href={'/shop'}
        >
          <p className="md:hidden lg:block">SHOP NOW</p>
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};
