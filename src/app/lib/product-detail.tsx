export type ProductDetailType = {
  id: string;
  availableSizes: string[];
  productOverview: string;
  material: string;
  color: string;
  salesCount: number;
};

export const productsDetail = [
  {
    id: '1',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    productOverview:
      'The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.',
    material: 'Soft wool blend',
    color: 'Various',
    salesCount: 0,
  },
];
