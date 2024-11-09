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

export const brandFeatures = [
  {
    label: 'Starting from: $49.99',
    title: 'Exclusive collection for everyone',
  },
  {
    label: 'Newly collection out now',
    title: 'Our unique design for this season',
  },
  {
    label: 'Super sale up to: 70%',
    title: 'Mid-year sale from 20/6 to 30/6',
  },
];

export const collection = [
  {
    title: "For Men's",
    description: 'Starting at $24',
  },
  {
    title: "For Women's",
    description: 'Starting at $19',
  },
  {
    title: 'Accessories',
    description: 'Explore accessories',
  },
];

export const loggedInErrors = {
  WRONG_PASSWORD: 'Wrong password.',
  UNREGISTER: 'Not registered email.',
};
