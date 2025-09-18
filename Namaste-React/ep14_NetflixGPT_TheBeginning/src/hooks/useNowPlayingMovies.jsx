import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constants";
import { addNowPlayingMovie } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  
  const fetchNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
  if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
    fetchNowPlayingMovies();
  }
}, [nowPlayingMovies]);
};

export default useNowPlayingMovies;
