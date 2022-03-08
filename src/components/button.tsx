/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface Props {
  text?: string;
  onClick: Function;
  color?: string;
  backgroundColor?: string;
  border?: string;
  height?: number;
  width?: number;
  icon?: string;
  radius?: number;
}

function Button(Props) {
  const {
    text,
    onClick,
    color,
    backgroundColor,
    border,
    height,
    width,
    icon,
    radius,
  } = Props;
  return (
    <button
      onClick={onClick}
      css={{
        color: color ? color : "white",
        backgroundColor: backgroundColor ? backgroundColor : "black",
        height: height ? `${height}rem` : "2.5rem",
        width: width ? `${width}rem` : "5rem",
        border: border ? border : "none",
        borderRadius: radius ? `${radius}rem` : "0.5rem",
      }}
    >
      {icon ? <i className={icon} /> : null}
      {text ? text : "Button"}
    </button>
  );
}

export default Button;
