import React, { useState } from "react";
import ExerciseItem from "../ExerciseItem/ExerciseItem";
import "./ListExercise.scss";

const dataItemFake = {
  title: "家事全般（立位・軽い）",
  kcal: "26kcal",
  time: "10 min",
};

export default function ListExercise() {
  const [listExercise] = useState(() => {
    return new Array(32).fill(dataItemFake);
  });

  return (
    <div className="ListExercise">
      <div className="content">
        <div className="headerExercise">
          <p className="title">
            MY <br /> EXERCISE
          </p>
          <div className="date">2021.05.21</div>
        </div>

        <div className="list">
          {listExercise.map((item, index) => (
            <ExerciseItem
              key={index}
              title={item.title}
              kcal={item.kcal}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
