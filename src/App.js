import './App.css';
import Swiper from'./Swiper.js';
import Product from'./Product.js';
import SlideMenu from './SlideMenu.js';
import ProductIntrodus from './ProductIntrodus.js';
//Import Images
 export default function App() {
  return (
    <div className="App">
          
          <div className="container">
      <header>
        <SlideMenu />
      </header>
      <section className="slider">
        <Swiper />
      </section>
      <section className='products'>
        <Product />
      </section>
      <section className='product-introdus'>
        <ProductIntrodus />
      </section>
    </div>
    </div>
  );
}

