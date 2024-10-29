import { Button, Input, Select } from 'antd';
import React from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const categories = [
  {
    value: '1',
    label: "Men's fashion",
  },
  {
    value: '2',
    label: "Women's fashion",
  },
  {
    value: '3',
    label: 'Kids & Toys',
  },
  {
    value: '4',
    label: 'Accessories',
  },
  {
    value: '5',
    label: 'Cosmetics',
  },
  {
    value: '6',
    label: 'Shoes',
  },
  {
    value: '7',
    label: 'Sports',
  },
];

function AddProduct() {
  return (
    <div className="box-border w-full flex flex-col gap-6 px-14 py-8 mx-8 my-5 rounded-sm bg-default lg:max-w-[800px]">
      <div>
        <p className="mb-2">Product title</p>
        <Input size="large" placeholder="Product name..." name="name" />
      </div>
      <div className="flex justify-between">
        <div className="w-[45%]">
          <p className="mb-2">Price</p>
          <Input size="large" name="old_price" />
        </div>
        <div className="w-[45%]">
          <p className="mb-2">Offer Price</p>
          <Input size="large" name="sale_price" />
        </div>
      </div>
      <div>
        <p className="mb-2">Product Category</p>
        <Select
          showSearch
          placeholder="Search category"
          size="large"
          optionFilterProp="label"
          filterSort={(optA, optB) =>
            (optA?.label ?? '').toLowerCase().localeCompare((optB?.label ?? '').toLowerCase())
          }
          options={categories}
          className="w-[45%]"
        />
      </div>
      <div>
        <label htmlFor="file-input">
          <div className="py-20 px-7 flex flex-col bg-default border-[1px] border-dashed border-border">
            <p className="self-center">Upload product image</p>
            <ArrowUpTrayIcon className="w-6 mt-4 self-center" />
          </div>
        </label>
        <Input type="file" name="image" id="file-input" hidden />
      </div>
      <Button type="primary" shape="round" size="large" className="bg-primary-color w-fit mt-2">
        Add product
      </Button>
    </div>
  );
}

export default AddProduct;
