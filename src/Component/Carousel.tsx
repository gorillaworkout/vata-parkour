import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import parkour1 from "../Asset/parkour/parkour1.jpg";
import parkour2 from "../Asset/parkour/parkour2.jpg";
import parkour3 from "../Asset/parkour/parkour3.jpg";
import '../Style/Carousel.scss'
const CarouselSlider = () => {
  return (
    <Carousel autoPlay={true} swipeable={true} showThumbs={false}
    className="carousel-slider">
      <div>
        <img src={parkour1} />
      </div>
      <div>
        <img src={parkour2} />
      </div>
      <div>
        <img src={parkour3} />
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
