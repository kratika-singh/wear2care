import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage imageUrl={slide1} />
        <Carousel.Caption>
          <h3>Clean Up Your Closet</h3>
          <p>See What's new in 100% sustainable fashion</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imageUrl={slide2} />
        <Carousel.Caption>
          <h3>Your Preloved Clothes, Their Brighter Future</h3>
          <p>Bring Joy and Hope to Children in Need</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imageUrl={slide3} />
        <Carousel.Caption>
          <h3>Buy Quality, Donate with Heart</h3>
          <p>Shop quality, give generously, make an impact</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
