import React, { useState } from "react";
import './App.css';
import Swiper from'./Swiper.js';
import Product from'./Product.js';
import SlideMenu from './SlideMenu.js';
import ProductIntrodus from './ProductIntrodus.js';
import Accordion from './Accordion.js'
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
    </div>
  );
}

