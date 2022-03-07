import { createContext } from 'react';
// estilos
import styles from '../styles/styles.module.css';

// hooks
import { useProduct } from '../hooks/useProduct';
import {
  ProductContextProps,
  ProductCardProps,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  // hook personalizado
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
