import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS, TMDB_API } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch()

  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  };

  useEffect(() => {
    getNowPlayingMovies()
  }, []);

}

export default useNowPlayingMovies