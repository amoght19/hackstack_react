import React, { useEffect, useState } from "react";
import LoginBar from "../components/LoginBar";
import useFetch from "../components/Fetch";
import Section from "../components/Section";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [sliderMovies, setSliderMovies] = useState([]);

  const { data, isPending, error } = useFetch("http://localhost:8000/movies");

  useEffect(() => {
    const tempList = [];
    const sliderList = [];
    if (data && data.length) {
      for (const { cardImg, backgroundImg } of data) {
        tempList.push({ image: cardImg });
        sliderList.push({ image: backgroundImg });
      }
    }
    setMovies(tempList);
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
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <div style={{ width: "calc(100vw - 40px)" }}> */}
      {isPending && <div style={{ color: "#fff" }}>Loading...</div>}
      {!isPending && !error && (
        <>
          <Slider images={sliderMovies} />
          <Section SectionName={"Recommended For You"} MovieList={movies} />
          <Section SectionName={"Trending And Latest"} MovieList={movies} />
          <Section SectionName={"Action"} MovieList={movies} />
        </>
      )}
      {/* </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
