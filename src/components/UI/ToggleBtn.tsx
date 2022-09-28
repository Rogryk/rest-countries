import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import styles from "./ToggleBtn.module.css";
import themeContext from "../store/theme-context";

const ToggleBtn: React.FC = () => {
  const themeCtx = useContext(themeContext);

  return (
    // <button onClick={props.onClick} className={styles.button + " hover-effect"}>
    <button
      onClick={themeCtx.toggleTheme}
      className={styles.button + " hover-effect"}
    >
      <FontAwesomeIcon icon={faMoon} size="lg" />
      <p>{themeCtx.theme} Mode</p>
    </button>
  );
};

export default ToggleBtn;
