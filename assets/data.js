export const banner = [
  {
    title: 'Explore',
    button: 'Store',
    imgUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Discover',
    button: 'Shop',
    imgUrl:
      'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const categories = [
  {
    name: 'Jacket',
    slug: 'jacket',
    imgUrl:
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Fashion',
    slug: 'fashion',
    imgUrl:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Shop for men',
    slug: 'Shop for men',
    imgUrl:
      'https://images.unsplash.com/photo-1559204260-49087a92c6dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Shoes',
    slug: 'shoes',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Clothes',
    slug: 'clothes',
    imgUrl:
      'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const sales = [
  {
    id: 1,
    title: 'Summer Sale',
    subTitle: 'Get up to 50% off on summer collection!',
    button: 'Shop Now',
    imgUrl:
      'https://res.cloudinary.com/dxacttggi/image/upload/c_fill,h_732,w_2000/v1/xion-cart/banners/xqzbcrdsqzm5mjqvcyvc?_a=BAMCkGWO0',
  },
  {
    id: 2,
    title: 'The January Collection',
    subTitle: 'Explore Our January Collection!',
    button: 'Shop Now',
    imgUrl:
      'https://res.cloudinary.com/dxacttggi/image/upload/c_fill,h_732,w_2000/v1/xion-cart/banners/wnebbglay3hbmwtwfhil?_a=BAMCkGWO0',
  },
];
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const benefits = [
  {
    id: 1,
    icon: <Feather name="box" size={24} />,
    title: 'Free Shipping',
    subTitle: 'Free shipping over order $120',
  },
  {
    id: 2,
    icon: (
      <Feather
        name="credit-card"
        size={24}
      />
    ),
    title: 'Flexible Payment',
    subTitle: 'Pay with Multiple Credit Cards',
  },
  {
    id: 3,
    icon: (
      <Feather
        name="corner-up-left"
        size={24}
      />
    ),
    title: '14 Day Returns',
    subTitle: 'Within 30 days for an exchange',
  },
  {
    id: 4,
    icon: (
      <MaterialIcons
        name="support-agent"
        size={24}
      />
    ),
    title: 'Premium Support',
    subTitle: 'Outstanding premium support',
  },
];

export const sortOptions = [
  {label: 'Default', value: 'default'},
  {label: 'Alphabetically (A to Z)', value: 'name-asc'},
  {label: 'Alphabetically (Z to A)', value: 'name-desc'},
  {label: 'Price (Low to High)', value: 'price-asc'},
  {label: 'Price (High to Low)', value: 'price-desc'},
];

export const currencyOptions = [
  {label: '🇧🇩 BDT', value: 'BDT'},
  // {label: '🇺🇸 USD', value: 'USD'},
  // {label: '🇪🇺 EUR', value: 'EUR'},
  // {label: '🇬🇧 GBP', value: 'GBP'},
  // {label: '🇯🇵 JPY', value: 'JPY'},
  // {label: '🇨🇦 CAD', value: 'CAD'},
  // {label: '🇦🇺 AUD', value: 'AUD'},
  // {label: '🇨🇭 CHF', value: 'CHF'},
  // {label: '🇸🇬 SGD', value: 'SGD'},
  // {label: '🇮🇳 INR', value: 'INR'},
  // {label: '🇨🇳 CNY', value: 'CNY'},
  // {label: '🇧🇷 BRL', value: 'BRL'},
  // {label: '🇿🇦 ZAR', value: 'ZAR'},
  // {label: '🇷🇺 RUB', value: 'RUB'},
  // {label: '🇲🇽 MXN', value: 'MXN'},
  // {label: '🇰🇷 KRW', value: 'KRW'},
  // {label: '🇸🇦 SAR', value: 'SAR'},
  // {label: '🇹🇷 TRY', value: 'TRY'},
  // {label: '🇳🇬 NGN', value: 'NGN'},
  // {label: '🇦🇪 AED', value: 'AED'},
];

export const languageOptions = [
  {label: 'English', value: 'english'},
  // {label: 'Bengali', value: 'bengali'},
  // {label: 'French', value: 'french'},
  // {label: 'Spanish', value: 'spanish'},
  // {label: 'Hindi', value: 'hindi'},
  // {label: 'Mandarin Chinese', value: 'mandarin'},
  // {label: 'Arabic', value: 'arabic'},
  // {label: 'Portuguese', value: 'portuguese'},
  // {label: 'Russian', value: 'russian'},
  // {label: 'Urdu', value: 'urdu'},
  // {label: 'Japanese', value: 'japanese'},
  // {label: 'German', value: 'german'},
  // {label: 'Italian', value: 'italian'},
  // {label: 'Korean', value: 'korean'},
  // {label: 'Turkish', value: 'turkish'},
  // {label: 'Vietnamese', value: 'vietnamese'},
  // {label: 'Persian (Farsi)', value: 'farsi'},
  // {label: 'Malay/Indonesian', value: 'malay'},
  // {label: 'Thai', value: 'thai'},
  // {label: 'Swahili', value: 'swahili'},
];

export const payment = [
  {id: 1, url: 'https://xioncart.com/images/payments/visa.png'},
  {id: 2, url: 'https://xioncart.com/images/payments/img-1.png'},
  {id: 3, url: 'https://xioncart.com/images/payments/img-2.png'},
  {id: 4, url: 'https://xioncart.com/images/payments/img-3.png'},
  {id: 5, url: 'https://xioncart.com/images/payments/img-4.png'},
];
