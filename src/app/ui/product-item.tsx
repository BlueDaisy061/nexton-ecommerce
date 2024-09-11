import Image from 'next/image';
import { PercentBadgeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

export type ProductInfo = {
  image: string;
  isDiscount: boolean;
  percentDiscount?: number;
  productName: string;
  productCategory: string;
  price: string;
  salePrice: string;
  rate: string;
  numberOfFeedbacks: number;
};

export const ProductItem = ({
  product,
  showDetail = true,
}: {
  product: ProductInfo;
  showDetail?: boolean;
}) => {
  const {
    image,
    isDiscount,
    percentDiscount,
    productName,
    productCategory,
    price,
    salePrice,
    rate,
    numberOfFeedbacks,
  } = product;
  return (
    <div>
      <div className="w-full bg-gray p-4 rounded-2xl relative mb-5">
        <Image src={image} height={0} width={0} className="w-full h-96" alt={'product-image'} />
        {isDiscount && (
          <div className="absolute flex items-center justify-between top-4 left-4 bg-default min-w-32 py-2 px-4 rounded-full">
            <PercentBadgeIcon className="w-4 h-4 text-body-text" />
            <p>{percentDiscount}% Discount</p>
          </div>
        )}
        <div className="absolute w-9 h-9 bg-default flex items-center rounded-full top-4 right-4">
          <ShoppingBagIcon className="w-4 h-4 ml-auto mr-auto text-body-text" />
        </div>
      </div>
      {showDetail && (
        <div className="px-4 flex justify-between">
          <div>
            <div className="mb-4">
              <h5>{productName}</h5>
              <p>{productCategory}</p>
            </div>
            <div className="flex gap-1">
              <StarIcon className="w-5 h5 text-yellow" />
              <p>
                {rate} ({numberOfFeedbacks})
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h4>{salePrice}</h4>
            <p className="line-through">{price}</p>
          </div>
        </div>
      )}
    </div>
  );
};
