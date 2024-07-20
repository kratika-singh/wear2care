import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage imageUrl={slide1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imageUrl={slide2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imageUrl={slide3}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
