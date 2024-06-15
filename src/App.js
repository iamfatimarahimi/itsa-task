import React, { useState } from "react";
import { HashRouter as Router , Routes , Route } from "react-router-dom"; 
import './App.css';
import './Components/Bubble.css'
import Swiper from'./Components/Swiper.js';
import Product from'./Components/Product.js';
import SlideMenu from './Components/SlideMenu.js';
import ProductIntrodus from './Components/ProductIntrodus.js';
import Accordion from './Components/Accordion.js';
import Contact from './ContactPage/cCntact.js'
//Import Images
 export default function App() {
  const [accordionOpened, setAccordionOpened] = useState(null);
  const toggleAccordionOpened = (accordion) => {
    if (accordionOpened === accordion) {
      setAccordionOpened(null);
    } else {
      setAccordionOpened(accordion);
    }
  };
  const products = [
    {
      title: "Chocolate Chip Cookies",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed pulvinar sapien sed enim blandit, quis
        mollis leo pretium. Phasellus non dui neque.
        Maecenas tincidunt ipsum vel nulla suscipit
        interdum. Sed varius arcu et imperdiet iaculis.
        Vestibulum mattis magna vitae scelerisque
        porttitor. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos
        himenaeos. Etiam semper ligula a tellus volutpat,
        et aliquet nibh commodo.`,
    },
    {
      title: "Other Cookies",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed pulvinar sapien sed enim blandit, quis
        mollis leo pretium. Phasellus non dui neque.
        Maecenas tincidunt ipsum vel nulla suscipit
        interdum. Sed varius arcu et imperdiet iaculis.
        Vestibulum mattis magna vitae scelerisque
        porttitor. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos
        himenaeos. Etiam semper ligula a tellus volutpat,
        et aliquet nibh commodo.`,
    },

    {
      title: "Other Cookies!",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed pulvinar sapien sed enim blandit, quis
        mollis leo pretium. Phasellus non dui neque.
        Maecenas tincidunt ipsum vel nulla suscipit
        interdum. Sed varius arcu et imperdiet iaculis.
        Vestibulum mattis magna vitae scelerisque
        porttitor. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos
        himenaeos. Etiam semper ligula a tellus volutpat,
        et aliquet nibh commodo.`,
    },

    {
      title: "Other Oreos",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed pulvinar sapien sed enim blandit, quis
        mollis leo pretium. Phasellus non dui neque.
        Maecenas tincidunt ipsum vel nulla suscipit
        interdum. Sed varius arcu et imperdiet iaculis.
        Vestibulum mattis magna vitae scelerisque
        porttitor. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos
        himenaeos. Etiam semper ligula a tellus volutpat,
        et aliquet nibh commodo.`,
    },
  ];

  return (
    <Router>
      <Routes>
          <Route path="/Contact" element={<Contact/>} />
      </Routes>
  
    <div className="App">
          <div className="container">
              
      <header>
        <SlideMenu />
        
      </header>
      
      <section className="slider">
        <Swiper />
      </section>
      </div> 
      <section className='products'>
        <Product />
      </section>
      
      <section className='product-introdus'>
        <ProductIntrodus />
      </section>
      <section className='accordion-qustion'>
        <h1 className="text-center">سولات متدوال</h1>
        {products.map((product) => (
        <Accordion
          accordionOpened={accordionOpened}
          setAccordionOpened={toggleAccordionOpened}
          {...product}
        />
      ))}
      </section>
    
    
    </div>
    </Router>
  );
}

