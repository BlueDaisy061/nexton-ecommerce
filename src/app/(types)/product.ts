import { ProductCategory } from './enum';

export type ProductBasicType = {
  _id: string;
  image: string;
  isDiscount: boolean;
  percentDiscount?: number;
  productName: string;
  productCategory: ProductCategory;
  price: number;
  salePrice?: number;
  rate?: number;
  numberOfFeedbacks?: number;
};

export type ProductDetailType = {
  _id: string;
  availableSizes: string[];
  tax: number;
  productOverview: string;
  material?: string;
  color: string[];
  salesCount: number;
  keywords: string[];
};
