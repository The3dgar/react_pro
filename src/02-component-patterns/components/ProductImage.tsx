import { CSSProperties, useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

// en este caso por que es opcional el parametro img
export const ProductImage = ({
  img = '',
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="product"
      style={style}
    />
  );
};
