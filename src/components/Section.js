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
          MovieList.map(({ image, id }, index) => (
            <Link to={`/home/${id}`} key={index}>
              <img src={image} alt="poster"></img>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Section;
