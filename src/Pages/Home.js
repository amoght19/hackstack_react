import React, { useEffect, useState } from "react";
import LoginBar from "../components/LoginBar";
import useFetch from "../components/Fetch";
import Section from "../components/Section";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { genreList, exits } from "../utils/genreList";
import { addMovie, deleteMovie } from "../actions/actions";
import { connect } from "react-redux";

export const Home = ({ Images, addMovie, deleteMovie }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [sliderMovies, setSliderMovies] = useState([]);

  const { data, isPending, error } = useFetch("http://localhost:8000/movies");

  useEffect(() => {
    const tempList = [];
    const sliderList = [];
    if (data && data.length) {
      for (const obj of data) {
        var genres = genreList(obj);

        for (const genre of genres) {
          var pos = exits(genre, tempList);
          if (pos > 0) {
            tempList[pos].list.push({
              image: obj.cardImg,
              id: obj.id,
            });
          } else {
            tempList.push({
              name: genre,
              list: [
                {
                  image: obj.cardImg,
                  id: obj.id,
                },
              ],
            });
          }
        }
      }
    }
    setMoviesData(tempList);
    for (const obj of tempList) {
      for (const { image, id } of obj.list) {
        if (exits(image, sliderList) < 0) {
          sliderList.push({
            image: image,
            id: id,
          });
          break;
        }
      }
    }
    setSliderMovies(sliderList);
  }, [data]);
  return (
    <div>
      <LoginBar />
      {error && (
        <div style={{ color: "#fff" }}>
          Something went wrong. Try again later
        </div>
      )}
      {isPending && <div style={{ color: "#fff" }}>Loading...</div>}
      {!isPending && !error && (
        <>
          {sliderMovies.length && <Slider images={sliderMovies} />}
          {Images.length && (
            <Section SectionName={"Favourites"} MovieList={Images} />
          )}
          {moviesData.length &&
            moviesData.map(({ name, list }, index) => (
              <Section SectionName={name} key={index} MovieList={list} />
            ))}
        </>
      )}
      <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
