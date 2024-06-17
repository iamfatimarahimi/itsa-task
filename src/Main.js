import React, { useState } from "react";
import './App.css';
import './Components/Bubble.css'
import Swiper from'./Components/Swiper.js';
import Product from'./Components/Product.js';
import SlideMenu from './Components/SlideMenu.js';
import ProductIntrodus from './Components/ProductIntrodus.js';
import Footer from './Components/Footer.js';
import Accordion1 from './Components/Accordion.js'
export default function Main(){
    return(
        <>
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
      <section className='accordion-qustion text-center'>
         <div className="question-icon text-center">
          <i class='bx bx-question-mark'></i>
          
        </div>
        <h1 className="text-center">سولات متدوال</h1>
        <Accordion1 />
      </section>
      <footer>
        <Footer />
      </footer>
    
    </div>
        </>
    )
}