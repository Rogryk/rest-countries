import React from "react";
import styles from "./Button.module.css";

interface IButton {
  onClick: (arg: any) => void;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  class?: string;
  children: React.ReactNode;
}

const ToggleBtn: React.FC<IButton> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`
      ${styles.buttonSize} 
      ${styles.buttonBorders} 
      ${styles.buttonDisplay} 
      ${props.class}`}
    >
      {props.iconLeft}
      <p>{props.children}</p>
      {props.iconRight}
    </button>
  );
};

export default ToggleBtn;
