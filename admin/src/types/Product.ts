export type ProductBasic = {
  _id?: string;
  productName: string;
  price: number;
  salePrice?: number;
  productCategory: string;
  images: string[];
};

export type ProductDetail = {
  _id?: string;
  availableSizes: string[];
  tax?: number;
  productOverview: string;
  material?: string;
  color: string[];
  salesCount: number;
  keywords: string[];
};

export type ProductInfo = ProductBasic & ProductDetail;
