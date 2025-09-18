import React, { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovie } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const url = await fetch(TOP_RATED_MOVIE_API, API_OPTIONS);
    const data = await url.json();
    dispatch(addTopRatedMovie(data.results));
  };


  useEffect(() => {
    if (!topRatedMovies || topRatedMovies.length === 0) {
      getTopRatedMovies();
    }
  }, [topRatedMovies]);
};

export default useTopRatedMovies;
