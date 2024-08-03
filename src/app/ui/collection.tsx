import { Carousel } from 'antd';
import { collection } from '../lib/constants';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { CollectionCard } from './collection-card';

export const Collection = () => {
  return (
    <div>
      <Carousel autoplay>
        {collection.map((item, key) => (
          <CollectionCard title={item.title} description={item.description} key={key} />
        ))}
      </Carousel>
    </div>
  );
};
