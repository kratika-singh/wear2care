import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import "../../Styles/home.css"
function CarouselImage({ text, imageUrl }) {
  return (
    <div className="carousel-image-container">
      <Image src={imageUrl} alt={text} fluid className="carousel-image" />
      <div className="carousel-gradient"></div>
      <div className="carousel-text">{text}</div>
    </div>
  );
}

CarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CarouselImage;
