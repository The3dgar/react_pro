import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  // TODO: maxCount
  const { counter, increaseBy, maxCount } = useContext(ProductContext);
  // TODO: isMaxReached = useCallback, dep: [count, maxCount] // true if count >= maxCount

  const isMaxReached = useCallback(
    () => maxCount && counter >= maxCount,
    [maxCount, counter]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
