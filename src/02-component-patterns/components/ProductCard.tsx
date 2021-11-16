import { createContext, ReactElement, CSSProperties } from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product, ProductContextProps } from '../interfaces/interfaces';
// import { ProductImage } from './ProductImage';
// import { ProductTitle } from './ProductTitle';
// import { ProductButtons } from './ProductButtons';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProducts();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* Forma tradicional*/}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
