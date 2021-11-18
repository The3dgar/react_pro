import { useState } from 'react';
import { onChangeArgs, ShoppingCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      // if (count === 0) {
      //   delete oldShoppingCart[product.id];
      //   return { ...oldShoppingCart };
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };


      /**
       * Otra forma de hacerlo desvinculando el producto del carrito
       */

      const productInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return { ...oldShoppingCart, [product.id]: productInCart };
      }

      delete oldShoppingCart[product.id];
      return {
        ...oldShoppingCart,
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
