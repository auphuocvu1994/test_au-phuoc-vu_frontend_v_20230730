import React from "react";
import "./DiaryItem.scss";

export default function DiaryItem({ title, description }) {
  return (
    <div className="DiaryItem">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
}
