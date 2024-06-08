// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/Autoplay ';
//Import images

import slide1 from './images/computer background.jpg';
import slide2 from './images/evening-landscape-minimal-4k-kl.jpg';
import slide3 from './images/10.jpg';
import slide4 from './images/Slide4.png';
export default () => {
  return (
    <Swiper
    modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
    >
      <SwiperSlide><img src={slide1}  alt="slide1"/></SwiperSlide>
      <SwiperSlide><img src={slide2}  alt="slide1"/></SwiperSlide>
      <SwiperSlide><img src={slide3}  alt="slide1"/></SwiperSlide>
      <SwiperSlide><img src={slide4}  alt="slide1"/></SwiperSlide>
      ...
    </Swiper>
  );
};