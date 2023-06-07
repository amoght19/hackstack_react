import React from "react";
import styles from "../styles/Section.module.css";
import { Link } from "react-router-dom";

const Section = ({ SectionName, MovieList }) => {
  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.heading}>{SectionName}</h1>
      <div className={styles.container}>
        {MovieList &&
          MovieList.length &&
          MovieList.map(({ image }, index) => (
            <Link to={"/home/1"}>
              <img src={image} alt="poster" key={index}></img>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Section;
