import React, { useEffect, useState } from "react";
import LoginBar from "../components/LoginBar";
import styles from "../styles/MovieDetails.module.css";
import play from "../assets/play-icon-black.png";
import trailer from "../assets/play-icon-white.png";
import add from "../assets/add.svg";
import { useParams } from "react-router-dom";
import useFetch from "../components/Fetch";
import { connect } from "react-redux";
import { addMovie, deleteMovie } from "../actions/actions";
import minus from "../assets/minus.png";

export const MovieDetail = ({ addMovie, deleteMovie, Images }) => {
  const [detail, setdetail] = useState({});
  const [favourite, setFavourite] = useState(false);

  const { movieId } = useParams();
  const { error, isPending, data } = useFetch(
    `http://localhost:8000/movies/${movieId}`
  );

  useEffect(() => {
    if (data) {
      setdetail(data);
      for (const { id, image } of Images) {
        if (id == movieId) setFavourite(true);
      }
    }
  }, [data]);

  const handleAddFavourite = () => {
    if (favourite) {
      deleteMovie({
        id: movieId,
        image: detail.backgroundImg,
      });
    } else {
      addMovie({
        id: movieId,
        image: detail.backgroundImg,
      });
    }
    console.log(Images);
    setFavourite(!favourite);
  };
  return (
    <div className={styles.page_container}>
      <LoginBar />
      {error && (
        <div style={{ color: "#fff" }}>
          Something went wrong. Try again later
        </div>
      )}
      {isPending && <div style={{ color: "#fff" }}>Loading...</div>}
      {!error && !isPending && (
        <>
          <div className={styles.image_container}>
            <div className={styles.image_wrapper}>
              <img
                src={detail.backgroundImg}
                alt="poster"
                className={styles.poster}
              />
              <div className={styles.smallIcons}>
                <div className={styles.playContainer}>
                  <img src={play} alt={"play"} className={styles.play} />
                  PLAY
                </div>
                <div className={styles.trailerContainer}>
                  <img
                    src={trailer}
                    alt={"trailer"}
                    className={styles.trailer}
                  />
                  TRAILER
                </div>
                {favourite ? (
                  <div
                    className={styles.removeContainer}
                    onClick={handleAddFavourite}
                  >
                    <img
                      src={minus}
                      alt="remove from favourites"
                      className={styles.remove}
                    />
                  </div>
                ) : (
                  <div
                    className={styles.addContainer}
                    onClick={handleAddFavourite}
                  >
                    <img
                      src={add}
                      alt="Add to playlist"
                      className={styles.add}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className={styles.description}>
              <div className={styles.iconsContainer}>
                <div className={styles.playContainer}>
                  <img src={play} alt={"play"} className={styles.play} />
                  PLAY
                </div>
                <div className={styles.trailerContainer}>
                  <img
                    src={trailer}
                    alt={"trailer"}
                    className={styles.trailer}
                  />
                  TRAILER
                </div>

                {favourite ? (
                  <div
                    className={styles.removeContainer}
                    onClick={handleAddFavourite}
                  >
                    <img
                      src={minus}
                      alt="remove from favourites"
                      className={styles.remove}
                    />
                  </div>
                ) : (
                  <div
                    className={styles.addContainer}
                    onClick={handleAddFavourite}
                  >
                    <img
                      src={add}
                      alt="Add to playlist"
                      className={styles.add}
                    />
                  </div>
                )}
              </div>
              <p>{detail.subTitle}</p>
              <h1>{detail.description}</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Images: state,
  };
};

const mapDispatchToProps = {
  addMovie: addMovie,
  deleteMovie: deleteMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
