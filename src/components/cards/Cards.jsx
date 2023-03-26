import { useState } from "react";
import React from "react";
import Card from "./Card";
const Cards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 4, img: "/img/java.png", stat: "" },
      { id: 4, img: "/img/java.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 6, img: "/img/mongo.png", stat: "" },
      { id: 6, img: "/img/mongo.png", stat: "" },
      { id: 7, img: "/img/GitHub.png", stat: "" },
      { id: 7, img: "/img/GitHub.png", stat: "" },
      { id: 8, img: "/img/c-sharp.png", stat: "" },
      { id: 8, img: "/img/c-sharp.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

//   const [prev, setPrev]=useState(-1)
  const handleClick = (id) => {
    alert(id);
  };
  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;
