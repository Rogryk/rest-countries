import React, { useContext } from "react";
import Card from "../../../layout/Card";
import styles from "./Element.module.css";
import { ICountryBasicData } from "../Body";
import ThemeContext from "../../../store/theme-context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface IElement extends ICountryBasicData {
  elementClickHandler: (arg: string) => void;
}

const Element: React.FC<IElement> = (props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <Card
      data-testid="element-component"
      theme={themeCtx.theme}
      className={`${styles.element} ${
        themeCtx.theme === "light" ? styles.light : styles.dark
      }`}
      onClick={() => props.elementClickHandler(props.name)}
    >
      <div className={styles["image-container"]}>
        <LazyLoadImage
          alt={`flag of ${props.name}`}
          src={props.flag}
          width={"100%"}
          height={"auto"}
          effect="opacity"
        ></LazyLoadImage>
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
