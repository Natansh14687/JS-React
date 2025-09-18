import React, { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovie } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const url = await fetch(POPULAR_MOVIE_API, API_OPTIONS);
    const data = await url.json();
    dispatch(addPopularMovie(data.results));
  };


  useEffect(() => {
    if (!popularMovies || popularMovies.length === 0) {
      getPopularMovies();
    }
  }, [popularMovies]);
};

export default usePopularMovies;
