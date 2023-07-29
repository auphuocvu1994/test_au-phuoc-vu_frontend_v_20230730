import React, { useState } from "react";
import "./BodyRecord.scss";
import LineChartComponent from "./Chart";
import clsx from "clsx";
const listTime = ["日", "週", "月", "年"];
export default function BodyRecord() {
  const [typeTimeIndex, setTypeTimeIndex] = useState(3);

  const onClickTime = (index) => {
    setTypeTimeIndex(index);
  };
  return (
    <div className="BodyRecord">
      <div className="content">
        <div className="headerBodyRecord">
          <p className="title">
            BODY <br /> RECORD
          </p>
          <div className="date">2021.05.21</div>
        </div>
        <div className="chart">
          <LineChartComponent />
        </div>
        <div className="distanceDisplay">
          {listTime.map((item, index) => (
            <div
              className={clsx("item", {
                active: typeTimeIndex === index,
              })}
              key={index}
              onClick={() => onClickTime(index)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
