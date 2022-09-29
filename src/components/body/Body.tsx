import React, { useEffect, useState, useContext } from "react";
import Content from "./bodyContent/Content";
import Filters from "./Filters";
import styles from "./Body.module.css";
import CountryDetail from "./bodyContent/detail/CountryDetail";
import ThemeContext from "../../store/theme-context";
import { Loader } from "@mantine/core";
import useFetchData from "../../hooks/useFetch";

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

interface IFetchedData {
  data: ICountryDetailedData[];
  isError: boolean;
  isLoading: boolean;
}

const Body: React.FC = () => {
  const [dataToDisplay, setDataToDisplay] = useState<
    ICountryBasicData[] | null
  >(null);
  const [regionFilter, setRegionFilter] = useState("all");
  const [keywordFilter, setKeywordFilter] = useState("");
  const [selectedCountryName, setSelectedCountryName] = useState("");

  const themeCtx = useContext(ThemeContext);

  const { data, isError, isLoading }: IFetchedData = useFetchData(
    "https://restcountries.com/v2/all"
  );

  useEffect(() => {
    setDataToDisplay(data);
  }, [data]);

  useEffect(() => {
    let dataFilteredByRegion = null;
    let dataFilteredByKeyword = null;

    if (!data) {
      return;
    }

    if (regionFilter === "all") {
      dataFilteredByRegion = data;
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
    <main className={`${styles.body} ${themeCtx.theme}`}>
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
          />
          {dataToDisplay && (
            <Content
              content={dataToDisplay}
              elementClickHandler={elementClickHandler}
            />
          )}

          {isLoading && (
            <Loader className={styles["loader-position"]} variant="oval" />
          )}

          {isError && <p>Fetching Error. Check your connection.</p>}
        </>
      )}
    </main>
  );
};

export default Body;
