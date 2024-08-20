'use client';
import { InputNumber, Slider } from 'antd';
import { useState } from 'react';

type RangePriceType = {
  min: number;
  max: number;
};

export const FilterPriceRange = () => {
  const [range, setRange] = useState<RangePriceType>({ min: 0, max: 500 });

  const onChange = (value: number[]) => {
    if (value[0] < value[1]) {
      setRange({ min: value[0], max: value[1] });
    }
  };

  const onChangeMin = (value: any) => {
    if (range.max && range.max > value) {
      setRange({ min: value, max: range.max });
    }
  };

  const onChangeMax = (value: any) => {
    if (range.min && range.min < value) {
      setRange({ max: value, min: range.min });
    }
  };

  return (
    <div>
      <h4 className="mb-6">Price Range</h4>
      <div>
        <Slider
          min={0}
          max={500}
          onChange={onChange}
          range={true}
          defaultValue={[range.min, range.max]}
          value={[range.min, range.max]}
        />
        <div className="flex justify-between gap-6 mt-5">
          <div>
            <p className="mb-1">Min price</p>
            <InputNumber
              className="w-28 rounded-full"
              min={0}
              max={500}
              value={range.min}
              onChange={onChangeMin}
            />
          </div>
          <div>
            <p className="mb-1">Max price</p>
            <InputNumber
              className="w-28 rounded-full"
              min={0}
              max={500}
              value={range.max}
              onChange={onChangeMax}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
