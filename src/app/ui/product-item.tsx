import Image from 'next/image';
import { PercentBadgeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

export type ProductInfo = {
  image: string;
  isDiscount: boolean;
  percentDiscount?: number;
  productName: string;
  productCategory: string;
  price: number;
  salePrice?: number;
  rate: number;
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
    <>
      <div className="w-full bg-gray p-4 rounded-2xl relative">
        <div className="w-full aspect-square">
          <Image src={image} alt={'product-detail'} fill className="object-cover rounded-2xl" />
        </div>
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
        <div className="px-4 mt-3 flex justify-between">
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
          {salePrice && (
            <div className="flex flex-col items-end">
              <h5>${salePrice.toFixed(2)}</h5>
              <p className="line-through">${price.toFixed(2)}</p>
            </div>
          )}
          {!salePrice && <h5>${price.toFixed(2)}</h5>}
        </div>
      )}
    </>
  );
};
