import './App.css';
import './script.js';
import logoPic from './images/logo.png';
import slide1 from './images/computer background.jpg';
 export default function App() {
  return (
    <div classNameName="App">
          <div className="container">
      <header>
        <div className="logo">
          <img src={logoPic} alt="Logo"/>
        </div>
        <ul className="navigation">
          <li><a href="#">دسته بندی</a></li>
          <li><a href="AboutMe.html">راهنمای خرید</a></li>
          <li><a href="./form/login.html">درباره ما</a></li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search" />
          <i className="bx bx-search-alt-2"></i>
        </div>
      </header>
      <section className="slider">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide wrapper">
              <img src={slide1}  alt="slide1"/>
            </div>
            <div className="swiper-slide wrapper">
              <img src="images/evening-landscape-minimal-4k-kl.jpg"  />
            </div>
            <div className="swiper-slide wrapper">
              <img src="images/10.jpg"  />
            </div>
            <div className="swiper-slide wrapper">Slide 4</div>
            <div className="swiper-slide wrapper">Slide 5</div>
            <div className="swiper-slide wrapper">Slide 6</div>
            <div className="swiper-slide wrapper">Slide 7</div>
            <div className="swiper-slide wrapper">Slide 8</div>
            <div className="swiper-slide wrapper">Slide 9</div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </div>
    </div>
  );
}

