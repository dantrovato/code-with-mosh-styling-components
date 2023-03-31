import React from "react";
import styles from "./Button.module.css";

interface Props {
  onClick: () => void;
  children: string;
}

const Button = ({ onClick, children }: Props) => {
  return (
    <button className={[styles.btn, styles["btn-danger"]].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
