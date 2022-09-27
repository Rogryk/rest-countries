import React from "react";
import styles from "./Content.module.css";
import Element from "./Element";
import { ICountryBasicData } from "./Body";

interface IContent {
  content: ICountryBasicData[];
  elementClickHandler: (arg: string) => void;
  colorMode?: "light" | "dark";
}

const Content: React.FC<IContent> = (props) => {
  const colorMode = props.colorMode || "light";

  return (
    <section
      className={`${styles.content} ${
        colorMode === "light" ? styles.light : styles.dark
      }`}
    >
      {props.content.map((el, index) => {
        return (
          <Element
            key={index}
            flag={el.flag}
            name={el.name}
            population={el.population}
            region={el.region}
            capital={el.capital}
            elementClickHandler={props.elementClickHandler}
            colorMode={colorMode}
          />
        );
      })}
    </section>
  );
};

export default Content;
