import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import { topSeller } from './TopSeller';

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false
  }

  return (
    <div>
      <Slider  {...settings}>
        {topSeller.map(item => <CarouselItem image={item.image} title={item.title} />)}
      </Slider>
    </div>
  )
}

export default Carousel
