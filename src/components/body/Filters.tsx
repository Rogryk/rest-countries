import React, { useState, useEffect, useContext } from "react";
import { Input } from "@mantine/core";
import { IconSearch, IconChevronDown } from "@tabler/icons";
import { Menu, Button, Text } from "@mantine/core";

import Card from "../../layout/Card";
import styles from "./Filters.module.css";
import ThemeContext from "../../store/theme-context";

interface IFilters {
  regionFilterHandler: (arg: string) => void;
  keywordFilterHandler: (arg: string) => void;
  colorMode?: "light" | "dark";
}

const Filters: React.FC<IFilters> = (props) => {
  const [currentRegion, setCurrentRegion] = useState("Filter by Region");
  const [searchInput, setSearchInput] = useState("");
  const [isSearchInputWrong, setIsSearchInputWrong] = useState(false);

  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    props.keywordFilterHandler(searchInput);
  }, [searchInput]);

  const onClickHandler = (region: string) => {
    setCurrentRegion(region[0].toUpperCase() + region.slice(1));
    props.regionFilterHandler(region);
  };

  function hasNumber(myString: string) {
    return /\d/.test(myString);
  }

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    if (hasNumber(event.target.value)) {
      setIsSearchInputWrong(true);
    } else {
      setIsSearchInputWrong(false);
    }
  };

  return (
    <section className={`${styles.filters} ${themeCtx.theme}`}>
      <Card theme={themeCtx.theme}>
        <div className={styles["input-wrapper"]}>
          <Input
            value={searchInput}
            onChange={onSearchInputChange}
            classNames={{
              input:
                `${themeCtx.theme}-element` +
                ` ${
                  !isSearchInputWrong
                    ? styles["border-transparent"]
                    : styles.alert
                } `,
              wrapper: `${styles["input-width"]} `,
            }}
            icon={<IconSearch />}
            variant="filled"
            placeholder="Search for a country..."
            radius="md"
            size="lg"
            invalid={isSearchInputWrong}
          />
        </div>
      </Card>
      <Card theme={themeCtx.theme}>
        <Menu
          shadow="md"
          width={"target"}
          classNames={{
            item:
              `${themeCtx.theme}-element` +
              ` ${styles[`theme-${themeCtx.theme}-hover`]}`,
            dropdown:
              `${themeCtx.theme}-element` +
              ` ${styles["border-transparent"]} ${
                styles[`dropdown-shadow-${themeCtx.theme}`]
              }`,
          }}
        >
          <Menu.Target>
            <Button
              classNames={{
                root:
                  `${themeCtx.theme}-element` +
                  ` ${styles["button-font"]} ${styles["filter-height"]}`,
              }}
            >
              <div className={styles["button-inner"]}>
                {currentRegion}
                <IconChevronDown width={16} height={16} />
              </div>
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item id="africa" onClick={() => onClickHandler("africa")}>
              Africa
            </Menu.Item>
            <Menu.Item id="americas" onClick={() => onClickHandler("americas")}>
              America
            </Menu.Item>
            <Menu.Item id="asia" onClick={() => onClickHandler("asia")}>
              Asia
            </Menu.Item>
            <Menu.Item id="europe" onClick={() => onClickHandler("europe")}>
              Europe
            </Menu.Item>
            <Menu.Item id="oceania" onClick={() => onClickHandler("oceania")}>
              Oceania
            </Menu.Item>
            <Menu.Item id="all" onClick={() => onClickHandler("all")}>
              All Regions
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Card>
    </section>
  );
};

export default Filters;
