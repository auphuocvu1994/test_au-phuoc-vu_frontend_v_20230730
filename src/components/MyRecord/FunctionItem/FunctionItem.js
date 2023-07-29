import React from "react";
import "./FunctionItem.scss";
import clsx from "clsx";

export default function FunctionItem({ title, subTitle, className }) {
  return (
    <div className={clsx("FunctionItem", className)}>
      <p className="title">{title}</p>
      <p className="subTitle">{subTitle}</p>
    </div>
  );
}
