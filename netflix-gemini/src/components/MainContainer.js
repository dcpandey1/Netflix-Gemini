import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return

  const mainmovie = movies[0];
  const { original_title, overview, id } = mainmovie;

  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </>
  )
}

export default MainContainer