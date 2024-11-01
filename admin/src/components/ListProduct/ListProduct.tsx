import React, { useEffect, useState } from 'react';
import { ProductDetail } from '../../types/ProductDetail';
import { Button, Flex, Table, TableProps } from 'antd';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

const columns: TableProps<ProductDetail>['columns'] = [
  {
    title: 'Product name',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (image, record) => <img src={image} alt={record.productName} className="w-40 p-5" />,
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
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<ProductDetail> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="p-10">
      <h3>All product list</h3>
      {/* <Table<ProductDetail> columns={columns} dataSource={allProducts} className="w-full" /> */}
      <Flex gap="middle" vertical>
        <Flex align="center" gap="middle">
          <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
            Delete
          </Button>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
        </Flex>
        <Table<ProductDetail>
          rowSelection={rowSelection}
          columns={columns}
          dataSource={allProducts}
        />
      </Flex>
    </div>
  );
}

export default ListProduct;
