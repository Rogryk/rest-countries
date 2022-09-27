import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import styles from "./ToggleBtn.module.css";

interface IToggleBtn {
  onClick: () => void;
}

const ToggleBtn: React.FC<IToggleBtn> = (props) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      <FontAwesomeIcon icon={faMoon} size="lg" />
      <p>Dark Mode</p>
    </button>
  );
};

export default ToggleBtn;
