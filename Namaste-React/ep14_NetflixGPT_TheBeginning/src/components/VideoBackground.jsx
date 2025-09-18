import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  if(!trailerVideo) return;
  
  const {key} = trailerVideo;
  return (
    <div className="">
      <iframe
        src={"https://www.youtube.com/embed/"+key+"?autoplay=1&loop=1&mute=1&playlist="+key+"&controls=0&modestbranding=1&showinfo=0&fs=0&rel=0&iv_load_policy=3&disablekb=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full aspect-video object-cover"
      ></iframe>
      <div className="absolute inset-0 text-white aspect-video bg-gradient-to-t from-black w-full"></div>
    </div>
  );
};

export default VideoBackground;
