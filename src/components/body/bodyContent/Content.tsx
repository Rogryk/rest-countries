import React from "react";
import styles from "./Content.module.css";
import Element from "./Element";
import { ICountryBasicData } from "../Body";

interface IContent {
  content: ICountryBasicData[];
  elementClickHandler: (arg: string) => void;
}

const Content: React.FC<IContent> = (props) => {
  return (
    <section className={`${styles.content}`}>
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
          />
        );
      })}
    </section>
  );
};

export default Content;
