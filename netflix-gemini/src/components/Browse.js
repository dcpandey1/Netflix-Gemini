import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPopularMovies from '../hooks/useNowPopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const GptSearchView = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  useNowPopularMovies();

  return (
    <>
      <Header />
      {
        GptSearchView ? <GptSearch /> : <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </>
  )
}

export default Browse