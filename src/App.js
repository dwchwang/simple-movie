import { Fragment } from "react";
import MovieList from "./components/movies/MovieList";

function App() {
  return (
    <Fragment>
      <header className="header gap-x-5 flex items-center justify-center text-white py-10 mb-">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner page-container h-[500px] mb-20">
        <div className="w-full h-full relative  rounded-lg">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://cdn.tgdd.vn/Files/2019/04/29/1163886/avengersendgame_800x450.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avenger: Endgame</h2>
            <div className="flex items-center gap-x-5 mb-8">
              <span className="px-4 py-2 border border-white rounded-lg">
                Adventure
              </span>
              <span className="px-4 py-2 border border-white rounded-lg">
                Adventure
              </span>
              <span className="px-4 py-2 border border-white rounded-lg">
                Adventure
              </span>
            </div>
            <button className="py-3 px-6 bg-primary rounded-lg text-white font-medium">
              Watch now
            </button>
          </div>
        </div>
      </section>
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
