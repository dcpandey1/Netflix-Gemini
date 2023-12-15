import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptMovieSuggestions = () => {

  const gpt = useSelector(store => store.gpt)

  const { movieResult, movienames } = gpt;

  if (!movienames) return null; // Shimmer UI

  return (
    <div className='m-4 p-4 bg-black text-white bg-opacity-70'>
      {
        movienames.map((movieName, index) => < MovieList key={movieName} title={movieName} movies={movieResult[index]} />
        )
      }
    </div>
  )
}

export default GptMovieSuggestions