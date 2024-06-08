import './App.css';
import './script.js';
import Swiper from'./Swiper.js';
//Import Images
import logoPic from './images/logo.png';
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
        <Swiper />
      </section>
    </div>
    </div>
  );
}

