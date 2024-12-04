import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";

const MovieCard = ({ item }) => {
  const { title, release_date, poster_path, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full">
      <img
        src={tmdbAPI.image500(poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-4"
      />
      <div className="flex flex-col flex-1">
        <h3 className=" font-bold text-xl mb-3">{title}</h3>
        <div className="flex items-center justify-between opacity-50 text-sm mb-8">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
      </div>
      <Button bgColor="secondary" onClick={() => navigate(`/movie/${id}`)}>
        Watch Now
      </Button>
    </div>
  );
};

export default MovieCard;
