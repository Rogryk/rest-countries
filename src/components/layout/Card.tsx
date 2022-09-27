import React from "react";
import styles from "./Card.module.css";

interface ICard {
  children: React.ReactNode;
  className?: string;
  onClick?: (...args: any[]) => void;
}

const Card: React.FC<ICard> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={styles.card + ` ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
