import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NeflixBG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <img className='fixed -z-10' src={NeflixBG} />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch