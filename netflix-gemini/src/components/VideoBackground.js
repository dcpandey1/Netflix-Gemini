import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  const TrailerVideo = useSelector(store => store.movies?.trailerVideo);

  // const [trailerVideo,settrailerVideo]=useState(null);

  // Fetch Movie Trailer Video
  // This will need movie id

  // API call for movie trailer
  useMovieTrailer(movieID);

  return (
    <div className="w-screen">

      <iframe 
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + TrailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
