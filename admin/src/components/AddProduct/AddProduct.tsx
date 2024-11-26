import { Button, Input, Select, Tag } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { SelectProps, UploadFile, UploadProps } from 'antd';
import { ProductCategory, ProductInfo, productSizes, ProductColors } from '../../types';
import TextArea from 'antd/es/input/TextArea';

const categories = Object.values(ProductCategory).map((val) => {
  return {
    value: val,
    label: val,
  };
});

const initProductInfo: ProductInfo = {
  productName: '',
  price: 0,
  salePrice: 0,
  productCategory: '',
  images: [],
  availableSizes: [],
  tax: 0,
  productOverview: '',
  material: '',
  color: [],
  salesCount: 0,
  keywords: [],
};

type ColorTagRender = SelectProps['tagRender'];

const colorOptions: SelectProps['options'] = Object.values(ProductColors).map((val) => {
  return { value: val };
});

function AddProduct() {
  const [productDetails, setProductDetails] = useState<ProductInfo>(initProductInfo);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const filteredSizes = productSizes.filter((size) => !availableSizes.includes(size));

  const colorTagRender: ColorTagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        className="mr-2"
      >
        {label}
      </Tag>
    );
  };

  const changeHandler = (e: any) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const productCategoryChangeHandler = (value: string) => {
    setProductDetails({ ...productDetails, productCategory: value });
  };

  const handleKeywordsList = (e: any) => {
    const keywordsList = e.target.value.split(', ');
    setKeywords(keywordsList);
  };

  const handlePreview = async (file: UploadFile) => {
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button className="bg-none border-0" type="button">
      <PlusOutlined />
      <div className="mt-2">Upload</div>
    </button>
  );

  const addProduct = async () => {
    // console.log(URL.createObjectURL(fileList[0] as unknown as Blob));
    let responseData = { success: 0, image_url: '' };
    const product = productDetails;

    const formData = new FormData();
    // formData.append('product', fileList);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      // product.images = responseData.image_url;
      await fetch('http://localhost:4000/product/add-product', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert('Product added.');
          } else {
            alert('Add product failed');
          }
        });
    }
    setProductDetails(initProductInfo);
    setFileList([]);
  };

  return (
    <div className="w-full flex flex-col gap-6 px-8 py-8 rounded-sm bg-default lg:px-14 lg:py-8 lg:mx-8 lg:my-5 lg:max-w-[50%]">
      <div>
        <h5 className="mb-2">Product title</h5>
        <Input
          size="large"
          value={productDetails.productName}
          onChange={(e) => changeHandler(e)}
          placeholder="Product name..."
          name="productName"
        />
      </div>
      <div className="flex justify-between gap-10">
        <div className="w-full">
          <h5 className="mb-2">Price</h5>
          <Input
            size="large"
            name="price"
            value={productDetails.price}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="w-full">
          <h5 className="mb-2">Offer Price</h5>
          <Input
            size="large"
            name="salePrice"
            value={productDetails.salePrice}
            onChange={(e) => changeHandler(e)}
          />
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
          value={productDetails.productCategory}
          onChange={productCategoryChangeHandler}
        />
      </div>
      <div>
        <h5 className="mb-2">Available Sizes</h5>
        <Select
          mode="multiple"
          placeholder="Select available size for product"
          value={availableSizes}
          onChange={setAvailableSizes}
          options={filteredSizes.map((size) => ({
            value: size,
            label: size,
          }))}
          size="large"
          className="w-full"
        />
      </div>
      <div className="flex justify-between gap-10">
        <div className="w-full">
          <h5 className="mb-2">Tax</h5>
          <Input
            size="large"
            name="tax"
            value={productDetails.tax}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="w-full">
          <h5 className="mb-2">Sales count</h5>
          <Input
            size="large"
            name="salesCount"
            value={productDetails.salesCount}
            onChange={(e) => changeHandler(e)}
          />
        </div>
      </div>
      <div>
        <h5 className="mb-2">Product overview</h5>
        <TextArea
          rows={5}
          value={productDetails.productOverview}
          onChange={(e) => changeHandler(e)}
          placeholder="Short describe product..."
          name="productOverview"
          maxLength={300}
        />
      </div>
      <div>
        <h5 className="mb-2">Material</h5>
        <Input
          size="large"
          value={productDetails.material}
          onChange={(e) => changeHandler(e)}
          placeholder="Material..."
          name="material"
        />
      </div>
      <div>
        <h5 className="mb-2">Colors</h5>
        <Select
          mode="multiple"
          tagRender={colorTagRender}
          defaultValue={[]}
          className="w-full"
          options={colorOptions}
          onChange={setColors}
        />
      </div>
      <div>
        <h5>Keywords</h5>
        <p className="mb-2">Separating by comma and a space (e.g. active, stretchable)</p>
        <Input
          size="large"
          onChange={handleKeywordsList}
          placeholder="Some keywords..."
          name="keywords"
        />
      </div>

      <Upload
        listType="picture-card"
        fileList={fileList}
        accept={'image/png, mage/jpeg'}
        beforeUpload={() => false}
        onPreview={handlePreview}
        onChange={(fileList) => handleChange(fileList)}
      >
        {fileList.length >= 4 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}

      <Button
        type="primary"
        shape="round"
        size="large"
        onClick={() => addProduct()}
        className="bg-primary-color w-fit mt-2"
      >
        Add product
      </Button>
    </div>
  );
}

export default AddProduct;
