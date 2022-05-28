import React from "react";
import "./FoodSearchCard.css";

import { Card } from "react-bootstrap";

const FoodSearchCard = ({ item, id }) => {
  return (
    <div className="foodCard">
      <div key={id}>
        <Card
          className="card-container"
          style={{
            backgroundColor: "rgb(226, 174, 21)",
            borderRadius: "1rem",
          }}
        >
          <Card.Img variant="top" src={item.recipe.image} />

          <Card.Title className="cardTitle" style={{ fontSize: "0.8rem" }}>
            {item.recipe.label}
          </Card.Title>

          <a
            className="a"
            href={item.recipe.url}
            target="_blank"
            rel="noreferrer"
          >
            <button className="cardButton">Recipe Here</button>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default FoodSearchCard;
