import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






export default function ImageSlider({components}) {
  var settings = {
      
    dots: true,
    arrows:false,
   infinite:false,
   centerMode:true,
    speed: 300,
    lazyLoad: true,
     slidesToShow: 3,
      slidesToScroll: 1,
       responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
      
   
  };
  return (
    <Slider {...settings}>
     {components.map((comp,idx) => comp)} 
    </Slider>
  );
}