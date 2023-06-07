import React from "react";
import styles from "../styles/SideBar.module.css";
import logo from "../assets/logo.png";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt={"logo"} />
      <p>Home</p>
      <p>TV</p>
    </div>
  );
};

export default SideBar;
