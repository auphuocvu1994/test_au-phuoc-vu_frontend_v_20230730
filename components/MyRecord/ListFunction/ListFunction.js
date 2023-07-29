import React from "react";
import FunctionItem from "../FunctionItem/FunctionItem";
import "./ListFunction.scss";

const listFunction = [
  {
    title: "BODY RECORD",
    subTitle: "自分のカラダの記録",
    className: "myRecord",
  },
  {
    title: "MY EXERCISE",
    subTitle: "自分の運動の記録",
    className: "myExercise",
  },
  {
    title: "MY DIARY",
    subTitle: "自分の日記",
    className: "myDiary",
  },
];

export default function ListFunction() {
  return (
    <div className="ListFunction">
      <div className="list">
        {listFunction.map((item, index) => (
          <FunctionItem
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            className={item.className}
          />
        ))}
      </div>
    </div>
  );
}
