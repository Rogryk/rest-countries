import React, { useEffect, useState } from "react";
import Content from "./Content";
import Filters from "./Filters";
import styles from "./Body.module.css";
import CountryDetail from "./detail/CountryDetail";

export interface ICountryBasicData {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

interface Ilanguages {
  name: string;
}
interface ICurrencies {
  name: string;
}

export interface ICountryDetailedData extends ICountryBasicData {
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: ICurrencies[];
  languages: Ilanguages[];
  borderCountries: string[];
}

interface IBody {
  colorMode?: "light" | "dark";
}

const Body: React.FC<IBody> = (props) => {
  const [data, setData] = useState<ICountryBasicData[] | null>(null);
  const [dataToDisplay, setDataToDisplay] = useState<
    ICountryBasicData[] | null
  >(null);
  const [regionFilter, setRegionFilter] = useState("all");
  const [keywordFilter, setKeywordFilter] = useState("");
  const [selectedCountryName, setSelectedCountryName] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((res) => {
        setData(res), setDataToDisplay(res);
      });
  }, []);

  useEffect(() => {
    let dataFilteredByRegion = null;
    let dataFilteredByKeyword = null;

    if (!data) {
      return;
    }

    if (regionFilter === "all") {
      dataFilteredByRegion = data;
      console.log("lalala");
    } else {
      dataFilteredByRegion = data.filter(
        (el) => el.region.toLowerCase() === regionFilter.toLowerCase()
      );
    }

    if (keywordFilter.length > 0) {
      dataFilteredByKeyword = dataFilteredByRegion.filter((el) =>
        el.name.toLowerCase().includes(keywordFilter.toLowerCase())
      );
      setDataToDisplay(dataFilteredByKeyword);
    } else {
      setDataToDisplay(dataFilteredByRegion);
    }
  }, [regionFilter, keywordFilter]);

  const colorMode = props.colorMode || "light";

  const regionFilterHandler = (region: string) => {
    setRegionFilter(region);
  };
  const keywordFilterHandler = (keyword: string) => {
    setKeywordFilter(keyword);
  };

  const extractSingleCountryDataHandler = (
    countriesData: Array<any>,
    countryName: string
  ) => {
    const selectedCountryObject = countriesData.find(
      (obj) => obj.name === countryName
    );
    if (selectedCountryObject.borders) {
      const borderCountries = selectedCountryObject.borders.map(
        (countryAlpha3Code: string) => {
          return countriesData.find(
            (country) => country.alpha3Code === countryAlpha3Code
          ).name;
        }
      );
      selectedCountryObject.borderCountries = borderCountries || [];
    }

    return selectedCountryObject;
  };

  const backClickHandler = () => {
    setSelectedCountryName("");
  };

  const elementClickHandler = (country: string) => {
    setSelectedCountryName(country);
  };

  return (
    <main
      className={`${styles.body} ${
        colorMode === "light" ? styles.light : styles.dark
      }`}
    >
      {selectedCountryName && data ? (
        <CountryDetail
          {...extractSingleCountryDataHandler(data, selectedCountryName)}
          backClickHandler={backClickHandler}
          countryClickHandler={elementClickHandler}
        />
      ) : (
        <>
          <Filters
            regionFilterHandler={regionFilterHandler}
            keywordFilterHandler={keywordFilterHandler}
            colorMode={colorMode}
          />
          {dataToDisplay && (
            <Content
              content={dataToDisplay}
              elementClickHandler={elementClickHandler}
              colorMode={colorMode}
            />
          )}
        </>
      )}
    </main>
  );
};

export default Body;
