import React from "react";
import "./FoodItem.scss";

export default function FoodItem({ image, time, title, tags }) {
  return (
    <div className="FoodItem">
      <div className="wrapImage">
        <img className="image" src={image} alt="" />
        <p className="time">{time}</p>
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <p className="tags">{tags}</p>
      </div>
    </div>
  );
}
