import React, { useState, useEffect } from "react";
import { Input } from "@mantine/core";
import { IconSearch, IconChevronDown } from "@tabler/icons";
import { Menu, Button, Text } from "@mantine/core";

import Card from "../layout/Card";
import styles from "./Filters.module.css";

interface IFilters {
  regionFilterHandler: (arg: string) => void;
  keywordFilterHandler: (arg: string) => void;
  colorMode?: "light" | "dark";
}

const Filters: React.FC<IFilters> = (props) => {
  const [currentRegion, setCurrentRegion] = useState("Filter by Region");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    props.keywordFilterHandler(searchInput);
  }, [searchInput]);

  const onClickHandler = (region: string) => {
    setCurrentRegion(region[0].toUpperCase() + region.slice(1));
    props.regionFilterHandler(region);
  };

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const colorMode = props.colorMode || "light";
  const themeColors =
    colorMode === "light" ? styles["theme-light"] : styles["theme-dark"];

  const buttonRootClasses = `${styles.button} ${
    colorMode === "light"
      ? styles["button-colors-light"]
      : styles["button-colors-dark"]
  }`;

  console.log(buttonRootClasses);

  return (
    <section
      className={`${styles.filters} ${
        colorMode === "light" ? styles.light : styles.dark
      }`}
    >
      <Card theme={colorMode}>
        <div className={styles["input-wrapper"]}>
          <Input
            value={searchInput}
            onChange={onSearchInputChange}
            classNames={{
              input: themeColors + ` ${styles["border-transparent"]} `,
              icon: themeColors,
              wrapper: styles["input-width"],
            }}
            icon={<IconSearch />}
            variant="filled"
            placeholder="Search for a country..."
            radius="md"
            size="lg"
          />
        </div>
      </Card>
      <Card theme={colorMode}>
        <Menu
          shadow="md"
          width={"target"}
          classNames={{
            item: themeColors + ` ${styles[`theme-${colorMode}-hover`]}`,
            dropdown:
              themeColors +
              ` ${styles["border-transparent"]} ${
                styles[`dropdown-shadow-${colorMode}`]
              }`,
          }}
        >
          <Menu.Target>
            <Button
              classNames={{
                root:
                  themeColors +
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
            <Menu.Item id="america" onClick={() => onClickHandler("americas")}>
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
