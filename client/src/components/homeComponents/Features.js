import React from "react";
import "../../Styles/feature.css"
const Features = ({ imageUrl, title, text }) => {
  return (
      <div className="wrapper">
        <div className="card_feature">
          <img src={imageUrl} />
          <div className="info">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
  );
};

export default Features;
