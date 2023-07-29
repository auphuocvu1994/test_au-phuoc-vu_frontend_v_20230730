import React from "react";
import "./ButtonMain.scss";
import clsx from "clsx";

export default function ButtonMain({
  children,
  className,
  suffix,
  prefix,
  ...props
}) {
  return (
    <button className={clsx("ButtonMain", className)} {...props}>
      {prefix}
      {children}
      {suffix}
    </button>
  );
}
