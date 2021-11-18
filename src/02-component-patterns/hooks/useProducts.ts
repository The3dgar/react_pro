import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProducts = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (amount: number) => {
    if (isControlled.current) {
      return onChange!({ product, count: amount });
    }

    const newValue = Math.max(counter + amount, 0);
    setCounter(newValue);
    if (newValue >= 0 && onChange) {
      onChange({ count: newValue, product });
    }
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
