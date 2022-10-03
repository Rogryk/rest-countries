import React, { useContext } from "react";
import { ICountryDetailedData } from "../../Body";
import Card from "../../../../layout/Card";
import ThemeContext from "../../../../store/theme-context";
import Button from "../../../../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./CountryDetail.module.css";

interface ICountryDetail extends ICountryDetailedData {
  backClickHandler: () => void;
  countryClickHandler: (arg: string) => void;
}

const CountryDetail: React.FC<ICountryDetail> = (props) => {
  const themeCtx = useContext(ThemeContext);
  const currencies = props.currencies
    ? props.currencies.map((currencies) => {
        return (
          <span key={currencies.name} className={styles.separator}>
            {currencies.name}
          </span>
        );
      })
    : "No information";

  const languages = props.languages.map((language) => {
    return (
      <span key={language.name} className={styles.separator}>
        {" " + language.name}
      </span>
    );
  });

  const borderCountries = props.borderCountries
    ? props.borderCountries.map((country) => {
        return (
          <Card
            key={country}
            className={styles.borderCountriesElementWrapper}
            theme={themeCtx.theme}
          >
            <span
              onClick={() => props.countryClickHandler(country)}
              className={
                `${styles.borderCountriesElement} ${themeCtx.theme}-element` +
                " hover-effect"
              }
            >
              {country}
            </span>
          </Card>
        );
      })
    : "No information";

  const backButtonIcon = <FontAwesomeIcon icon={faArrowLeft} size="sm" />;

  return (
    <>
      <nav className={styles.nav}>
        <Card theme={themeCtx.theme}>
          <Button
            class={`${styles["back-btn"]} ${themeCtx.theme}-element `}
            onClick={props.backClickHandler}
            iconLeft={backButtonIcon}
          >
            Back
          </Button>
        </Card>
      </nav>
      <section className={styles["section-body"]}>
        <div className={styles.flagContainer}>
          <img src={props.flag} alt="flag of selected country" />
        </div>
        <div className={styles.infoContainer}>
          <h1>{props.name}</h1>
          <article>
            <ul className={styles.infoList}>
              <li>
                <strong>Native Name: </strong> {props.nativeName}
              </li>
              <li>
                <strong>Population: </strong>
                {props.population.toLocaleString("en")}
              </li>
              <li>
                <strong>Region:</strong> {props.region}
              </li>
              <li>
                <strong>Sub Region: </strong> {props.subregion}
              </li>
              <li>
                <strong>Capital: </strong> {props.capital}
              </li>
              <li>
                <strong>Top Level Domain: </strong> {props.topLevelDomain}
              </li>
              <li>
                <strong>Currencies: </strong> {currencies}
              </li>
              <li>
                <strong>Languages: </strong> {languages}
              </li>
            </ul>
            <div className={styles.borderCountries}>
              <strong>Border Countries: </strong> {borderCountries}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default CountryDetail;
