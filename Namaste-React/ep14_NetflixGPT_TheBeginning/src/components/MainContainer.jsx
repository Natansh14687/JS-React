import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!nowPlayingMovies) return;

    const {title, overview, id} = nowPlayingMovies[0];
  return (
    <div className=''>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id} />

    </div>
  )
}

export default MainContainer;