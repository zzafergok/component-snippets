/** @jsxImportSource @emotion/react */
import { css, CSSObject } from "@emotion/react";
import React from "react";
import { Props } from "../../modules/input";

export const defaultInputStyle: CSSObject = {
    // width: width ? `${width}rem !important` : "40%",
    // height: height ? `${height}rem !important` : "2.5rem",
    border: "1px solid #ccc",
    borderRadius: "0.25rem",
    padding: "0.5rem",
    fontSize: "1rem",
    fontWeight: 200,
    color: "#333",
    backgroundColor: "#fff",
    boxShadow: "0 0 1rem rgba(0, 0, 0, 0.05)",
    outline: "none",
    transition: "all 0.3s ease-in-out",
    "&:focus": {
      borderColor: "#ffad05",
      boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.2)",
    },
  };

function DefaultInput(Props) {
  const {
    className,
    type = "text" as any,
    id,
    name,
    value,
    placeholder,
    onChange,
    disabled = false,
    required = false,
    minLength,
    maxLength,
    pattern,
    autoComplete = "off",
    autoFocus = false,
    spellCheck,
    autoSave,
    width = "40",
    height = "2.5",
  } = Props;

  return (
    <>
      <input
        css={defaultInputStyle, { width: width && `${width}%`, height: height && `${height}rem` }}
        className={className}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        spellCheck={spellCheck}
        autoSave={autoSave}
      />
    </>
  );
}

export default DefaultInput;
