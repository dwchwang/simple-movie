import { Fragment } from "react";
import MovieList from "./components/movies/MovieList";
import Banner from "./components/banner/Banner";
import "swiper/scss";

function App() {
  return (
    <Fragment>
      <header className="header gap-x-5 flex items-center justify-center text-white py-10 mb-">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
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
}

export default App;
