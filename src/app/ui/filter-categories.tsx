import { Checkbox } from 'antd';
import { poppins } from './fonts';

export const FilterCategories = () => {
  return (
    <div>
      <h4 className="mb-6">Categories</h4>
      <div className="flex flex-col gap-3">
        <Checkbox className={poppins.className}>
          <p>Men&apos;s fashion</p>
        </Checkbox>
        <Checkbox className={poppins.className}>
          <p>Women&apos;s fashion</p>
        </Checkbox>
        <Checkbox className={poppins.className}>
          <p>Kids and Toys</p>
        </Checkbox>
        <Checkbox className={poppins.className}>
          <p>Accessories</p>
        </Checkbox>
        <Checkbox className={poppins.className}>
          <p>Cosmetics</p>
        </Checkbox>
        <Checkbox className={poppins.className}>
          <p>Shoes</p>
        </Checkbox>
        <Checkbox className={poppins.className}>
          <p>Sports</p>
        </Checkbox>
      </div>
    </div>
  );
};
