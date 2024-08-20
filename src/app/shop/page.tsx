'use client';
import { Dropdown, MenuProps, Space } from 'antd';
import { FilterCategories } from '../ui/filter-categories';
import { FilterPriceRange } from '../ui/filter-price-range';
import { FilterSort } from '../ui/filter-sort';
import { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';

const items: MenuProps['items'] = [
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
    key: '3',
  },
];

export default function ShopPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="pt-[4.5rem]">
      <div className="hidden md:flex lg:mx-[4.5rem] lg:mt-10 lg:mb-20">
        <div className="lg:min-w-64">
          <FilterCategories />
          <hr className="bg-body-text opacity-15 my-10" />
          <FilterPriceRange />
          <hr className="bg-body-text opacity-15 my-10" />
          <FilterSort />
        </div>
      </div>
      <div className="my-10 mx-6 lg:hidden">
        <Dropdown menu={{ items }} placement="bottomRight" open={openFilter}>
          <a
            onClick={() => setOpenFilter(!openFilter)}
            className="border border-solid border-body-text/20 border-1 px-[0.8rem] py-[0.3rem] rounded-full"
          >
            <Space>
              <FunnelIcon width={0} height={0} className="w-[10px] h-[10px]" />
              <p>Filters</p>
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
}
