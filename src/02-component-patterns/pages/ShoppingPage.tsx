import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-style.css';

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        {/* asi lo podriamos cargar tambien */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2' }}/>
          <ProductTitle title="Cafe" className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#70d1f8' }}>
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2' }}
          />
          <ProductTitle title="Cafe" style={{ fontWeight: 'bolder' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
