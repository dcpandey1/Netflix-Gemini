import { useDispatch } from "react-redux";
import { addNowPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS, Populer_TMDB_API } from "../utils/constants";
import { useEffect } from "react";

const useNowPopularMovies = () => {

  const dispatch = useDispatch()

  const getPopularMovies = async () => {
    const data = await fetch(Populer_TMDB_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPopularMovies(json.results))
  };

  useEffect(() => {
    getPopularMovies()
  }, []);

}

export default useNowPopularMovies;