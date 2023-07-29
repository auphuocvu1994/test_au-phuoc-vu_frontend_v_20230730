import React from "react";
import "./RecommendedItem.scss";
export default function RecommendedItem({ title, description }) {
  return (
    <div className="RecommendedItem">
      <p className="title">{title}</p>
      <div className="line"></div>
      <p className="description">{description}</p>
    </div>
  );
}
