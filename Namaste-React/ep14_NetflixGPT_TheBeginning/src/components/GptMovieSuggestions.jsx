import React from 'react'
import {useSelector} from "react-redux";
import MovieList from "./MovieList";


const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt);

  return movieNames && (
    <div className="bg-black m-10 p-2">
      {movieNames.map((movieName, index) => <MovieList title={movieName} movies={movieResults[index]} key={movieResults[index].id}  />)}
    </div>
  )
}

export default GptMovieSuggestions