import React, { useRef } from 'react'
import lang from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, Gemini_API_Key } from '../utils/constants'
import { gptSearhResults } from "../utils/gptSlice"
import { GoogleGenerativeAI } from "@google/generative-ai";

//TODO Refactor the code
const GptSearchBar = () => {

  const dispatch = useDispatch()
  const searchText = useRef(null)
  const genAI = new GoogleGenerativeAI(Gemini_API_Key);


  //Gemini API call
  const gemini = async () => {

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "Act as a movies recommendation system and suggest some movies for the query" + searchText.current.value +
      ". Only Give me 5 movies name , comma separated like the example given ahead. Example: Gadar,Animal,Pathan,Tiger,Jawan"
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const moviesArray = text.split(",").map((movie) => movie.trim());
    return moviesArray;
  };

  // Search Movie in TMDB
  const searchMoviesTMDB = async (movie_name) => {
    const movies = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie_name, API_OPTIONS)
    const json = await movies.json();
    return json.results;
  }

  const handleGPTsearchClick = async () => {

    const moviesArray = await gemini();
    const gptMovies = moviesArray;
    const promisArray = gptMovies.map((movie) => searchMoviesTMDB(movie))
    const tmdbResults = await Promise.all(promisArray)
    dispatch(gptSearhResults({ movienames: gptMovies, movieResult: tmdbResults }))

  }

  const langKey = useSelector(store => store.config.lang)

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder={lang[langKey].gptSearchPlaceholder} />
        <button onClick={handleGPTsearchClick} className='col-span-3 px-4 py-4 m-4 
            bg-red-800 text-white rounded-lg '>{lang[langKey].search} </button>
      </form>
    </div>
  )
}

export default GptSearchBar