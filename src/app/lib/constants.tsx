import {
  TruckIcon,
  ArrowsUpDownIcon,
  GlobeAltIcon,
  ReceiptRefundIcon,
} from '@heroicons/react/24/outline';

type FeatureType = {
  icon: any;
  title: string;
  description: string;
};

export const websiteFeatures: FeatureType[] = [
  {
    icon: <TruckIcon className="w-6 h-6" />,
    title: 'Free shipping',
    description: 'On orders over $50.00',
  },
  {
    icon: <ArrowsUpDownIcon className="w-6 h-6" />,
    title: 'Very easy to return',
    description: 'Just phone number',
  },
  {
    icon: <GlobeAltIcon className="w-6 h-6" />,
    title: 'Worldwide delivery',
    description: 'Fast delivery worldwide',
  },
  {
    icon: <ReceiptRefundIcon className="w-6 h-6" />,
    title: 'Refunds policy',
    description: '60 days return for any reason',
  },
];
