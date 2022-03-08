/** @jsxImportSource @emotion/react */
import { CSSObject } from "@emotion/react";

export interface Props {
  type?:
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange: Function;
  onBlur?: Function;
  onFocus?: Function;
  onKeyPress?: Function;
  disabled?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  size?: number;
  autoComplete?: string;
  autoFocus?: boolean;
  spellCheck?: boolean;
  autoSave?: string;
  list?: string;
  multiple?: boolean;
  alt?: string;
  src?: string;
  width?: string;
  height?: string;
  icon?: string;
  className?: string;
}
