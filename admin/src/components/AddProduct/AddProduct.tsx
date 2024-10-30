import { Button, Input, Select } from 'antd';
import React, { useState } from 'react';
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
  const [image, setImage] = useState();

  const imageHandler = (e: any) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="box-border w-full h-min-[100vh] flex flex-col gap-6 px-8 py-8 rounded-sm bg-default lg:px-14 lg:py-8 lg:mx-8 lg:my-5 lg:max-w-[50%]">
      <div>
        <h5 className="mb-2">Product title</h5>
        <Input size="large" placeholder="Product name..." name="name" />
      </div>
      <div className="flex justify-between gap-10">
        <div className="w-full">
          <h5 className="mb-2">Price</h5>
          <Input size="large" name="old_price" />
        </div>
        <div className="w-full">
          <h5 className="mb-2">Offer Price</h5>
          <Input size="large" name="sale_price" />
        </div>
      </div>
      <div>
        <h5 className="mb-2">Product Category</h5>
        <Select
          showSearch
          placeholder="Search category"
          size="large"
          optionFilterProp="label"
          filterSort={(optA, optB) =>
            (optA?.label ?? '').toLowerCase().localeCompare((optB?.label ?? '').toLowerCase())
          }
          options={categories}
          className="w-full md:w-[45%]"
        />
      </div>
      <div>
        <label htmlFor="file-input">
          {image ? (
            <img src={URL.createObjectURL(image)} alt="product-image" className="w-36" />
          ) : (
            <div className="py-20 px-7 flex flex-col bg-default border-[1px] border-dashed border-border">
              <p className="self-center">Upload product image</p>
              <ArrowUpTrayIcon className="w-6 mt-4 self-center" />
            </div>
          )}
        </label>
        <Input type="file" onChange={(e) => imageHandler(e)} name="image" id="file-input" hidden />
      </div>
      <Button type="primary" shape="round" size="large" className="bg-primary-color w-fit mt-2">
        Add product
      </Button>
    </div>
  );
}

export default AddProduct;
