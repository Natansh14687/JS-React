import React, { useRef } from "react";
import { googlegeminiai } from "../utils/googleGemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";


const SearchBarGpt = () => {
  const searchedText = useRef();
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang)

  const tmdbMovieSearch = async (movie) => {
    const url = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=true&page=1",
      API_OPTIONS
    );
    const data = await url.json();

    return data.results;
  };

  const handleClick = async () => {
    console.log(searchedText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchedText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const response = await googlegeminiai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: gptQuery,
    });

    // console.log(response.candidates[0]?.content?.parts[0]?.text);

    const geminiMovies =
      response.candidates[0]?.content?.parts[0]?.text.split(",");
    // console.log(geminiMovies);
    const promiseArray = geminiMovies.map((movie) => tmdbMovieSearch(movie));
    // console.log(promiseArray);

    const tmdbMovies = await Promise.all(promiseArray);
    console.log(tmdbMovies);

    dispatch(
      addGptMovieResults({ movieNames: geminiMovies, movieResults: tmdbMovies })
    );
  };

  return (
    <div className="flex justify-center pt-[7%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-1/2 grid grid-cols-12"
      >
        <input
          ref={searchedText}
          type="text"
          name=""
          id=""
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="bg-white m-4 col-span-9 p-2 rounded"
        />
        <button
          className="bg-red-700 col-span-3 m-4 p-2 ml-2 rounded-xl text-white font-bold cursor-pointer"
          onClick={handleClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBarGpt;
