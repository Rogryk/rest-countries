import React from "react";
import Card from "../layout/Card";
import styles from "./Element.module.css";
import { ICountryBasicData } from "./Body";

interface IElement extends ICountryBasicData {
  elementClickHandler: (arg: string) => void;
  colorMode?: "light" | "dark";
}

const Element: React.FC<IElement> = (props) => {
  const colorMode = props.colorMode || "light";

  return (
    <Card
      className={`${styles.element} ${
        colorMode === "light" ? styles.light : styles.dark
      }`}
      onClick={() => props.elementClickHandler(props.name)}
    >
      <div className={styles["image-container"]}>
        <img src={props.flag}></img>
      </div>
      <div className={styles.info}>
        <h3>{props.name}</h3>
        <p>
          <b>Population: </b> {props.population.toLocaleString("en")}
        </p>
        <p>
          <b>Region: </b> {props.region}
        </p>
        <p>
          <b>Capital: </b> {props.capital}
        </p>
      </div>
    </Card>
  );
};

export default Element;
