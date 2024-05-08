import { Icon } from "@iconify/react";
import React from "react";
import styles from "./BackButton.module.css";

interface BackButtonProps {
  onClick: () => void;
}
const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <div onClick={onClick} className={styles.backButtonContainer}>
      <Icon
        className={styles.backButton}
        icon="material-symbols:arrow-back"
        width="24"
        height="24"
        style={{ color: "#fff" }}
      />
      Go Back
    </div>
  );
};

export default BackButton;
