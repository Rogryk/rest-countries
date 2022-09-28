import React, { useContext } from "react";
import ToggleBtn from "../UI/ToggleBtn";
import styles from "./Header.module.css";
import ThemeContext from "../store/theme-context";

interface IHeader {}

const Header: React.FC<IHeader> = (props) => {
  const themeCtx = useContext(ThemeContext);
  console.log(themeCtx.theme);

  return (
    <header className={`${styles.header} ${themeCtx.theme}-element`}>
      <h3>Where in the world?</h3>
      <ToggleBtn />
    </header>
  );
};

export default Header;
