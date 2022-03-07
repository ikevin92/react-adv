import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

// exportacion necesaria para la forma 1
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons,
});

export default ProductCard;
