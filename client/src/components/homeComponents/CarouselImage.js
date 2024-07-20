import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

function CarouselImage({ text, imageUrl }) {
  return (
    <div className="carousel-image">
      <Image src={imageUrl} alt={text} fluid />
      <div className="carousel-text">{text}</div>
    </div>
  );
}

CarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CarouselImage;
