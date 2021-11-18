import { useState } from 'react';
import { onChangeArgs, ShoppingCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        delete oldShoppingCart[product.id];
        return { ...oldShoppingCart };
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
