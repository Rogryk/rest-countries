import React from "react";
import styles from "./Card.module.css";

interface ICard {
  children: React.ReactNode;
  className?: string;
  onClick?: (...args: any[]) => void;
  theme?: "light" | "dark" | string;
}

const Card: React.FC<ICard> = (props) => {
  const theme = props.theme ? props.theme : "light";

  return (
    <div
      onClick={props.onClick}
      className={
        styles.card + ` ${props.className} ${styles[`shadow-${theme}-theme`]}`
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
