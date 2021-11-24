import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';
import '../styles/custom-style.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <ProductCard
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
        children={({ reset, increaseBy, isMaxCountReached, count }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2' }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset!</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}>+2</button>
            )}

            <button onClick={() => increaseBy(-2)}>-2</button>
            <span>{count}</span>
          </>
        )}
      />
    </div>
  );
};

export default ShoppingPage;
