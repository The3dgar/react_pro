import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

const product = {
  id: '1',
  title: 'Coffee mug - card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          marginTop: '2rem',
          flexDirection: 'row',
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons/>
        </ProductCard>
        {/* asi lo podriamos cargar tambien */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="Cafe" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
