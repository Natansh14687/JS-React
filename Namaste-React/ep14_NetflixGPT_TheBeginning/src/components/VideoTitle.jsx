import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video pt-[20%] px-20 bg-gradient-to-r from-black/50 to-transparent z-10">
      <h1 className="font-extrabold text-3xl max-w-lg text-white">{title}</h1>
      <p className="py-4 max-w-2xl text-white">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl cursor-pointer rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 cursor-pointer bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
