import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../components/movies/MovieCard";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  // console.log("🚀 ~ MovieDetailsPage ~ data:", data);
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative ">
        <div className="overlay inset-0 bg-black opacity-65 absolute"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto">
        <img
          src={tmdbAPI.imageOriginal(poster_path)}
          alt=""
          className="w-full h-full object-cover rounded-xl -mt-[200px] relative z-10 pb-10 "
        />
      </div>
      <h1 className="text-white text-center font-bold text-4xl mb-10">
        {title}
      </h1>
      <div className="flex justify-center items-center gap-x-5 mb-10">
        {genres.length > 0 &&
          genres.map((item) => (
            <span
              className="text-primary border border-primary px-4 py-2"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
      </div>
      <div className="max-w-[700px] leading-relaxed text-center mx-auto mb-10">
        <p className="text-lg">{overview}</p>
      </div>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <SimilarMovie></SimilarMovie>
    </div>
  );
};

const MovieCredits = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher);
  // console.log("🚀 ~ MovieCredits ~ data:", data);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-3xl text-center mb-10 font-semibold">Casts</h2>
      <div className="grid grid-cols-4 gap-x-5">
        {cast.slice(0, 4).map((item) => (
          <div className="card-item " key={item.id}>
            <img
              src={tmdbAPI.imageOriginal(item.profile_path)}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg mb-3"
            />
            <h3 className="text-center text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieVideos = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  // console.log("🚀 ~ MovieVideos ~ data:", data);
  return (
    <div className="py-10">
      <div className="flex flex-col gap-y-10">
        {results.slice(0, 2).map((item) => (
          <div className="" key={item.id}>
            <h3 className="mb-5 text-xl font-medium p-3 bg-secondary inline-block">
              {item.name}
            </h3>
            <div key={item.key} className="w-full aspect-video">
              <iframe
                width="951"
                height="535"
                src={`https://www.youtube.com/embed/${item.key}`}
                title=" "
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SimilarMovie = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "similar "), fetcher);
  if (!data) return null;
  console.log("🚀 ~ SimilarMovie ~ data:", data);
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10 text-center">Similar Movies</h2>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

// <iframe width="951" height="535" src="https://www.youtube.com/embed/ZcGf17AOb0M" title="𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 nên nghe khi mùa đông sắp tới !!! Vì chúng ta bây giờ hai lối rồi..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
