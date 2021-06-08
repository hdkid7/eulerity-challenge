import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
      
   
  };
  return (
    <Slider {...settings}>
     {components.map((comp,idx) => comp)} 
    </Slider>
  );
}