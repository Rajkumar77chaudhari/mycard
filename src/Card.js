import React from "react";
import "./style/myStyle.css";

const Card = ({ src, alt, name, rDate, imdb, rotten }) => {
  return (
    <div className="Card-container">
      <img src={src} alt={alt} />
      <h1>{name}</h1>
      <p>{rDate}</p>
      <p>IMDB: {imdb}</p>
      <p>Rotton Tomatos: {rotten}</p>
    </div>
  );
};

export default Card;
