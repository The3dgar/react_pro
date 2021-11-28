import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}  
        children={({ reset, increaseBy, isMaxCountReached, count }) => (
          <>
            <ProductImage
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2' }}
            />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      />
    </div>
  );
};

export default ShoppingPage;
