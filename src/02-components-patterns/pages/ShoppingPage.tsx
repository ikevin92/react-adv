import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  img: './coffee-mug.png',
  title: 'Coffee Mug - Card',
};

export const ShoppingPage = () => {
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
        {/* forma 1 */}
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title title='Cafe Mulato' className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        {/* forma 2 */}
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage
            className='custom-image'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        {/* inline style */}
        <ProductCard product={product} style={{ backgroundColor: '#70d1f8' }}>
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
