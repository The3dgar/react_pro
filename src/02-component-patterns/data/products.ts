import { Product } from '../interfaces/interfaces';

const product1 = {
  id: '1',
  title: 'Coffee mug - card',
  img: './coffee-mug.png',
};
const product2 = {
  id: '2',
  title: 'Coffee mug 2- card',
  img: './coffee-mug2.png',
};

export const products: Product[] = [product1, product2];

/*
  '1': { ...product, count: 1 },
  '2': { ...product2, count: 2 },
 */
