import React from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieID) => {


    const dispatch = useDispatch()

    const getTrailerVideo = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"+ movieID+"/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();
        const trailer = json.results.filter((video) => video.type === "Trailer");

        // settrailerVideo(trailer)
        
        dispatch(addTrailerVideo(trailer[0]))
        
    };

    useEffect(() => {
        getTrailerVideo();
    }, []);

}

export default useMovieTrailer