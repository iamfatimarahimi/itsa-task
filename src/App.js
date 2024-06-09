import './App.css';
import Swiper from'./Swiper.js';
import SlideMenu from './SlideMenu.js'
//Import Images
// import logoPic from './images/logo.png';
 export default function App() {
  return (
    <div classNameName="App">
          <div className="container">
      <header>
        <SlideMenu />
      </header>
      <section className="slider">
        {/* <Swiper /> */}
        {/* <div className="search">
          <input type="text" placeholder="Search" />
          <i className="bx bx-search-alt-2"></i>
        </div> */}
      </section>
    </div>
    </div>
  );
}

