import { Product } from './types/Product';

export const sampleProducts: Product[] = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    slugURL: 'airpods-wireless-bluetooth-headphones',
    image: '/images/airpods.jpg',
    price: 89.99,
    stock: 10,
    rating: 4.5,
    reviews: 12,
    category: 'Electronics',
    brand: 'Apple',
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    slugURL: 'iphone-11-pro-256gb-memory',
    image: '/images/phone.jpg',
    price: 599.99,
    stock: 7,
    rating: 4.0,
    reviews: 8,
    category: 'Electronics',
    brand: 'Apple',
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    slugURL: 'sony-playstation-4-pro-white-version',
    image: '/images/playstation.jpg',
    price: 399.99,
    stock: 11,
    rating: 5,
    reviews: 12,
    category: 'Electronics',
    brand: 'Sony',
  },
];
