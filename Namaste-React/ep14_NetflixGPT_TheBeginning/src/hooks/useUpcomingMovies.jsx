import React, { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const url = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const data = await url.json();
    dispatch(addUpcomingMovie(data.results));
  };


  useEffect(() => {
    if (!upcomingMovies || upcomingMovies.length === 0) {
      getUpcomingMovies();
    }
  }, [upcomingMovies]);
};

export default useUpcomingMovies;
