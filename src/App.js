import React from "react";
import Card from "./Card";
import mdata from "./mData";
import "./style/myStyle.css";

const showMovie = (item, index) => {
  return (
    <Card
      src={item.src}
      alt={item.alt}
      name={item.name}
      rDate={item.rDate}
      imdb={item.imdb}
      rotten={item.rotten}
      key={index}
    />
  );
};

const App = () => {
  return (
    <div className="App-container">
      <h1>List Mravel Movies</h1>
      <h1>😀</h1>
      <h1></h1>
      {mdata.map(showMovie)}
    </div>
  );
};

export default App;
