import React from "react";
import styles from "../styles/LoginBar.module.css";

import logo from "../assets/logo.svg";
const LoginBar = () => {
  return (
    <div className={styles.container}>
      <p>
        <img src={logo} alt="disney" />
      </p>
      <button>Login</button>
    </div>
  );
};

export default LoginBar;
