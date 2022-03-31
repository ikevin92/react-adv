import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  // custom hook
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {/* forma 2 */}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
            className='bg-dark text-white'>
            <ProductImage
              className='custom-image'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      {/* carrito */}
      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            style={{ width: '100px' }}
            className='bg-dark text-white'
            onChange={(evento) => onProductCountChange(evento)}
            value={product.count}>
            <ProductImage
              className='custom-image'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductButtons
              className='custom-buttons'
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            />
          </ProductCard>
        ))}
      </div>

      {/* <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};
