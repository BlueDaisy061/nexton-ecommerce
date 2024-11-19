import { Button, Input, Select } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';

const categories = [
  {
    value: "Men's fashion",
    label: "Men's fashion",
  },
  {
    value: "Women's fashion",
    label: "Women's fashion",
  },
  {
    value: 'Kids & Toys',
    label: 'Kids & Toys',
  },
  {
    value: 'Accessories',
    label: 'Accessories',
  },
  {
    value: 'Cosmetics',
    label: 'Cosmetics',
  },
  {
    value: 'Shoes',
    label: 'Shoes',
  },
  {
    value: 'Sports',
    label: 'Sports',
  },
];

function AddProduct() {
  const [productDetails, setProductDetails] = useState({
    productName: '',
    price: '',
    salePrice: '',
    productCategory: '',
    images: [],
  });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const changeHandler = (e: any) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const productCategoryChangeHandler = (value: string) => {
    setProductDetails({ ...productDetails, productCategory: value });
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
    console.log(URL.createObjectURL(fileList[0] as unknown as Blob));
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
    setProductDetails({
      productName: '',
      price: '',
      salePrice: '',
      productCategory: '',
      images: [],
    });
    setFileList([]);
  };

  return (
    <div className="box-border w-full h-min-[100vh] flex flex-col gap-6 px-8 py-8 rounded-sm bg-default lg:px-14 lg:py-8 lg:mx-8 lg:my-5 lg:max-w-[50%]">
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
      {/* <div>
        <label htmlFor="file-input">
          {image ? (
            <img
              src={URL.createObjectURL(image as unknown as Blob)}
              alt="product-image"
              className="w-36"
            />
          ) : (
            <div className="py-20 px-7 flex flex-col bg-default border-[1px] border-dashed border-border">
              <p className="self-center">Upload product image</p>
              <ArrowUpTrayIcon className="w-6 mt-4 self-center" />
            </div>
          )}
        </label>
        <Input type="file" onChange={(e) => imageHandler(e)} name="image" id="file-input" hidden />
      </div> */}
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
