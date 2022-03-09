/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonProps } from "../../modules/button.ts";

function DefaultButton(ButtonProps) {
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
  } = ButtonProps;
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

export default DefaultButton;
