'use client';
import { products } from '@/app/lib/products';
import { ProductInfo, ProductItem } from '@/app/ui/product-item';
import { usePathname } from 'next/navigation';

export default function ProductPage() {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  // should fetch product detail
  const productDetail: ProductInfo = products.filter((product) => product.id === productId)[0];
  return (
    <div className="pt-[4.5rem] my-10 mx-6 md:mx-[3.5rem] md:mb-20 lg:mx-[4.5rem]">
      {/* Product display */}
      <div>
        {/* Product display images */}
        <div className="lg:flex">
          <ProductItem product={productDetail} showDetail={false} />
        </div>
        {/* Product info and add to cart */}
        <div></div>
      </div>
      {/* Product detail text */}
      <div></div>
      {/* Recommended products */}
      <div></div>
    </div>
  );
}
