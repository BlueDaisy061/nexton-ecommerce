'use client';
import { Radio, Space } from 'antd';
import { useState } from 'react';
import { poppins } from './fonts';

export const FilterSort = () => {
  const [sortBy, setSortBy] = useState();
  const onChange = (e: any) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <h4 className="mb-6">Sort order</h4>
      <div>
        <Radio.Group onChange={onChange} value={sortBy}>
          <Space direction="vertical" size={'middle'}>
            <Radio value={1} className={poppins.className}>
              <p>Most Popular</p>
            </Radio>
            <Radio value={2} className={poppins.className}>
              <p>Best Rating</p>
            </Radio>
            <Radio value={3} className={poppins.className}>
              <p>Newest</p>
            </Radio>
            <Radio value={4} className={poppins.className}>
              <p>Price Low - High</p>
            </Radio>
            <Radio value={5} className={poppins.className}>
              <p>Price High - Low</p>
            </Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
  );
};
