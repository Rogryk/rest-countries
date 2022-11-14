import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import ThemeToggleBtn from "../../UI/Button";
import ThemeContext from "../../store/theme-context";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const themeCtx = useContext(ThemeContext);

  const buttonIcon = <FontAwesomeIcon icon={faMoon} size="lg" />;

  return (
    <header className={`${styles.header} ${themeCtx.theme}-element`}>
      <h3>
        <a href="/">Where in the world?</a>
      </h3>
      <ThemeToggleBtn
        onClick={themeCtx.toggleTheme}
        class={"hover-effect"}
        iconLeft={buttonIcon}
      >
        {themeCtx.theme} Mode
      </ThemeToggleBtn>
    </header>
  );
};

export default Header;
