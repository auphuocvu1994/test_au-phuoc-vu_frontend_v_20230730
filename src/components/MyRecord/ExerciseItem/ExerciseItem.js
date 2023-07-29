import React from "react";
import "./ExerciseItem.scss";

export default function ExerciseItem({ title, kcal, time }) {
  return (
    <div className="ExerciseItem">
      <div className="leftContent">
        <p className="title">{title}</p>
        <p className="kcal">{kcal}</p>
      </div>
      <p className="time">{time}</p>
    </div>
  );
}
