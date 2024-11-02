import React, { useEffect, useState } from 'react';
import { ProductDetail } from '../../types/ProductDetail';
import { Button, Flex, Table, TableProps } from 'antd';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

type ProductDetailDataType = ProductDetail & {
  key: React.Key;
};

const columns: TableProps<ProductDetailDataType>['columns'] = [
  {
    title: 'Product name',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (image, record) => (
      <img src={image} alt={record.productName} className="w-24 h-24 object-cover" />
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Offer price',
    dataIndex: 'salePrice',
    key: 'salePrice',
  },
  {
    title: 'Category',
    dataIndex: 'productCategory',
    key: 'productCategory',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <PencilSquareIcon className="w-5 h-5 " />,
  },
];

function ListProduct() {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProductList = async () => {
    await fetch('http://localhost:4000/all-products')
      .then((res) => res.json())
      .then((data) =>
        setAllProducts(
          data.map((p: ProductDetail, i: any) => {
            return {
              ...p,
              key: i,
            };
          })
        )
      );
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const deleteSelectedProductsHandler = async () => {
    setLoading(true);
    await fetch('');
    setLoading(false);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<ProductDetailDataType> = {
    selectedRowKeys,
    onChange: (selectedRowKey) => onSelectChange(selectedRowKey),
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="py-6 px-10 w-full">
      <h3 className="flex justify-center">All product list</h3>
      <div className="mt-4 lg:mt-6">
        <Flex gap="middle" vertical>
          <Flex align="center" gap="middle">
            <Button
              type="primary"
              onClick={deleteSelectedProductsHandler}
              disabled={!hasSelected}
              loading={loading}
            >
              Delete
            </Button>
            <p>{hasSelected ? `Selected ${selectedRowKeys.length} items` : null}</p>
          </Flex>
          <Table<ProductDetailDataType>
            rowSelection={rowSelection}
            columns={columns}
            dataSource={allProducts}
            pagination={{ pageSize: 4, hideOnSinglePage: true }}
          />
        </Flex>
      </div>
    </div>
  );
}

export default ListProduct;
