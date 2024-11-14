import { ProductCategory } from './enum';

export type ProductBasicType = {
  id: string;
  image: string;
  isDiscount: boolean;
  percentDiscount?: number;
  productName: string;
  productCategory: ProductCategory;
  price: number;
  salePrice?: number;
  rate: number;
  numberOfFeedbacks: number;
};
