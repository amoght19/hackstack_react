import React from "react";
import LoginBar from "../components/LoginBar";
import styles from "../styles/MovieDetails.module.css";
import play from "../assets/play-icon-black.png";
import trailer from "../assets/play-icon-white.png";
import add from "../assets/add.svg";

const MovieDetail = () => {
  const data = {
    id: 3,
    backgroundImg:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg",
    cardImg:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg",
    description:
      "A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.",
    subTitle: "2018 • 7m • Family, Fantasy, Kids, Animation",
    title: "Bao",
    titleImg:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78",
    type: "recommend",
  };
  return (
    <div className={styles.page_container}>
      <LoginBar />
      <div className={styles.image_container}>
        <div className={styles.image_wrapper}>
          <img
            src={data.backgroundImg}
            alt="poster"
            className={styles.poster}
          />
          <div className={styles.smallIcons}>
            <div className={styles.playContainer}>
              <img src={play} alt={"play"} className={styles.play} />
              PLAY
            </div>
            <div className={styles.trailerContainer}>
              <img src={trailer} alt={"trailer"} className={styles.trailer} />
              TRAILER
            </div>
            <div className={styles.addContainer}>
              <img src={add} alt="Add to playlist" className={styles.add} />
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <div className={styles.iconsContainer}>
            <div className={styles.playContainer}>
              <img src={play} alt={"play"} className={styles.play} />
              PLAY
            </div>
            <div className={styles.trailerContainer}>
              <img src={trailer} alt={"trailer"} className={styles.trailer} />
              TRAILER
            </div>
            <div className={styles.addContainer}>
              <img src={add} alt="Add to playlist" className={styles.add} />
            </div>
          </div>
          <p>{data.subTitle}</p>
          <h1>{data.description}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
