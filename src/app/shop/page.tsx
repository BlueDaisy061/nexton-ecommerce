'use client';
import { Dropdown, MenuProps, Pagination, Space } from 'antd';
import { FilterCategories } from '../ui/filter-categories';
import { FilterPriceRange } from '../ui/filter-price-range';
import { FilterSort } from '../ui/filter-sort';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { products } from '../lib/products';
import { ProductItem } from '../ui/product-item';
import Link from 'next/link';
import { useContext } from 'react';
import { ProductContext } from '../(context)/context';

const filterItems: MenuProps['items'] = [
  {
    label: (
      <>
        <FilterCategories />
      </>
    ),
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <>
        <FilterPriceRange />
      </>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <FilterSort />,
    key: '2',
  },
];

const rowsPerPageItems: MenuProps['items'] = [
  {
    label: <p>3</p>,
    key: '0',
  },
  {
    label: <p>6</p>,
    key: '1',
  },
  {
    label: <p>9</p>,
    key: '2',
  },
];

export default function ShopPage() {
  const { allProducts } = useContext(ProductContext);

  return (
    <div className="pt-[4.5rem] mt-10 md:mx-[3.5rem] md:mb-20 lg:mx-[4.5rem] lg:flex">
      <div className="hidden lg:flex lg:flex-none">
        <div className="lg:min-w-64 lg:mr-8">
          <FilterCategories />
          <hr className="bg-body-text opacity-15 my-10" />
          <FilterPriceRange />
          <hr className="bg-body-text opacity-15 my-10" />
          <FilterSort />
        </div>
      </div>
      <div className="mb-6 mx-6 flex justify-between lg:hidden">
        <Dropdown menu={{ items: filterItems }} placement="bottomRight">
          <a
            onClick={(e) => e.preventDefault()}
            className="border border-solid border-body-text/20 border-1 px-[0.8rem] py-[0.3rem] rounded-full"
          >
            <Space>
              <FunnelIcon width={0} height={0} className="w-[10px] h-[10px]" />
              <p>Filters</p>
            </Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items: rowsPerPageItems }} trigger={['click']}>
          <a
            onClick={(e) => e.preventDefault()}
            className="border border-solid border-body-text/20 border-1 px-[0.8rem] py-[0.3rem] rounded-full"
          >
            <Space>
              <p>Rows per page</p>
              <ChevronDownIcon width={0} height={0} className="w-[10px] h-[10px]" />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="w-full">
        <div className="mx-6 gap-x-5 gap-y-8 grid grid-cols-autoFill lg:grow">
          {allProducts.map((product, key) => (
            <Link href={`/product/${product._id}`} key={key} className="mb-8 lg:mb-0">
              <ProductItem product={product} />
            </Link>
          ))}
        </div>
        <Pagination align="end" className="mt-14 hidden lg:flex" defaultCurrent={1} total={50} />
        <Pagination align="center" className="my-14 lg:hidden" defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}
