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
    <div className="">
      <div>
        <p>Product title</p>
        <Input size="large" placeholder="Product name..." name="name" />
      </div>
      <div>
        <div>
          <p>Price</p>
          <Input size="large" name="old_price" />
        </div>
        <div>
          <p>Offer Price</p>
          <Input size="large" name="sale_price" />
        </div>
      </div>
      <div>
        <p>Product Category</p>
        <Select
          showSearch
          placeholder="Search category"
          size="large"
          optionFilterProp="label"
          filterSort={(optA, optB) =>
            (optA?.label ?? '').toLowerCase().localeCompare((optB?.label ?? '').toLowerCase())
          }
          options={categories}
        />
      </div>
      <div>
        <label htmlFor="file-input">
          <div className="py-20 px-7 bg-default border-[1px] border-dashed border-border">
            <p>Upload product image</p>
            <ArrowUpTrayIcon className="w-6 self-center mt-4" />
          </div>
        </label>
        <Input type="file" name="image" id="file-input" hidden />
      </div>
      <Button type="primary" shape="round" size="large" className="bg-primary-color">
        Add image
      </Button>
    </div>
  );
}

export default AddProduct;
