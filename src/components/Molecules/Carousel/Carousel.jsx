import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselContent } from "../../ComponentIndex";
const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const Carousel = (data) => {
  return (
    <div>
        {console.log("image is: ", data)}
        <Slider {...settings}>
            {data.content.map((item) => {
                return (
                    <div>
                    
                      <CarouselContent imgSrc = {item.pics} />
                    </div>
                );
            })}
        </Slider>
        <p>{data}</p>
    </div>
  )
}

export default Carousel