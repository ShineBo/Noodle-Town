// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { images } from "../constants";

const MiniCarousel = () => {
  return (
  <div className=" w-[200px] object-cover">
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={1000}
      swipeable={true}
      dynamicHeight={true}
      className=""
    >
      {images.map((image, index) => (
        <div key={index} className="w-full h-full ">
          <img src={image} alt="" className="object-cover w-full h-full rounded-xl" />
        </div>
      ))}
    </Carousel>
  </div>
  );
};

export default MiniCarousel;