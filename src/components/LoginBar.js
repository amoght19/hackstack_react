import React from "react";
import styles from "../styles/LoginBar.module.css";

import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const LoginBar = () => {
  return (
    <div className={styles.container}>
      <p>
        <Link to={"/home"}>
          <img src={logo} alt="disney" />
        </Link>
      </p>
      <button>Login</button>
    </div>
  );
};

export default LoginBar;
