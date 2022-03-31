import { Product } from '../interfaces/interfaces';

const product = {
  id: '1',
  img: './coffee-mug.png',
  title: 'Coffee Mug - Card',
};

const product2 = {
  id: '2',
  img: './coffee-mug2.png',
  title: 'Coffee Mug - Meme',
};

export const products: Product[] = [product, product2];
