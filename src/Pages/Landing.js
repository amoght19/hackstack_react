import React from "react";
import styles from "../styles/Landing.module.css";

import LoginBar from "../components/LoginBar";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import disney from "../assets/disneyfinal.png";
const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div>
      <LoginBar />
      <div style={{ position: "relative" }}>
        <div className={styles.background}>
          <div className={styles.iconsContainer}>
            <div className={styles.upper_icons}>
              <p>hulu</p>
              <img src={logo} alt="disney" />
              <h2>ESPN+</h2>
            </div>
            <button onClick={handleClick}>Explore</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              consectetur sem eget posuere porttitor. Nunc commodo sapien
              finibus sem ullamcorper.
            </p>
            <div className={styles.lower_icons}>
              <img src={disney} alt={"disney"} /> <p>+</p> <p>Pixar</p> <p>+</p>
              <h1>Marvel</h1> <p>+</p> <p>Star</p> <p>+</p> <p>NGC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
