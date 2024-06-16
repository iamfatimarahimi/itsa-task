// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//Import css
import '../App.css';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
// import 'swiper/css/Autoplay ';
//Import images
import slide1 from '../images/background1.jpg';
import slide2 from '../images/evening-landscape-minimal-4k-kl.jpg';
import slide3 from '../images/background2.webp';
import slide4 from '../images/Slide4.png';

export default () => {
  return (
    <div className="Swiper">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}
    >
      

      <div className="swiper">
              <SwiperSlide><img className='slideImage' src={slide1}  alt="slide1"/></SwiperSlide>
              <SwiperSlide><img className='slideImage' src={slide2}  alt="slide2"/></SwiperSlide>
              <SwiperSlide><img className='slideImage' src={slide3}  alt="slide3"/></SwiperSlide>
              <SwiperSlide><img className='slideImage' src={slide4}  alt="slide4"/></SwiperSlide>
        </div>
        
    </Swiper>
    <div className="search">
          <input type="search" placeholder="...جستجو " />
          <div className="search-wrapper">
            <i className="bx bx-search-alt-2"></i>
          </div>
        </div>
        </div>
  )
};