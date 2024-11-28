import React, { Fragment } from "react";
import MovieList from "../components/movies/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 font-bold text-3xl">
          Now Playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 font-bold text-3xl">
          Top Rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize text-white mb-10 font-bold text-3xl">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
