import React from "react";
import Card from "./Card";

const MovieList = ({ title, movies }) => {
    
  return movies && (
    <div className="text-white">
        <h1 className="text-white font-extrabold ml-2 py-4 text-xl">{title}</h1>
      <div className="flex overflow-x-scroll movie-list">
        
        {/* <Card poster={movies?.[0]?.poster_path} /> */}
        <div className="flex">
          {movies.map((movie) => (
            movie.poster_path && <Card key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
