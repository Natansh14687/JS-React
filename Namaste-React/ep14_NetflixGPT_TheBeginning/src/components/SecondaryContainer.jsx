import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
    const popularMovies = useSelector(store => store.movies?.popularMovies);
    const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
    const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);
  return (
    <div className='-mt-80 bg-black'>
        <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies}  />
        <MovieList title={"Popular Movies"} movies={popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />

    </div>
  )
}

export default SecondaryContainer;