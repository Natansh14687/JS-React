import React, { useState } from "react";
import { API_OPTIONS, MOVIE_DETAILS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const url = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await url.json();

    const result = data.results.filter((video) => video.type == "Trailer");

    const trailer = result.length ? result[0] : data.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useState(() => {
    if (!trailerVideo || trailerVideo.length === 0) {
      getMovieTrailer();
    }
  }, [trailerVideo]);
};

export default useMovieTrailer;
