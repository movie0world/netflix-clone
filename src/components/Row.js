import React, { useEffect, useState } from "react";
import axios from "axios";
import urls from "./req";
import "../Row.css";
import YouTube from "react-youtube";
const BASE_URL = "https://api.themoviedb.org/3";
const Image_url = "https://image.tmdb.org/t/p/original";
const API_KEY = "31f399a5832aad9ea80cb7d95efc95d6";


function Row({ title, type, iswidth, playing, play }) {
  const [movies, setmovies] = useState([]);
  const [movieid, setmovieid] = useState("");

  useEffect(() => {
    const movielist = async () => {
      var movie = await axios.get(`${BASE_URL}${urls[type]}`);
      setmovies(movie.data.results);
    };
    if (movieid && play) {
      setmovieid("");
    }
    movielist();
  }, [type, play]);

  const handle = async (movie) => {
    if (!movieid && !play) {
      var id = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
      );
      playing(true);
      setmovieid(id.data?.results[0]?.key ? id.data.results[0].key : "");
    } else {
      setmovieid("");
      playing(false);
    }
  };

  return (
    
      <div>
        <h1 className="Heading">{title}</h1>
        <div className="Row--poster">
          {movies.map((item) => {
            if (item.poster_path && item.backdrop_path)
              return (
                <img
                  key={item.id}
                  onClick={() => handle(item)}
                  className={` row__poster ${iswidth ? 'imgwidth':''}`}
                  src={`${Image_url}${
                    !iswidth ? item.poster_path : item.backdrop_path
                  }`}
                />
              );
          })}
        </div>
        {movieid && <YouTube videoId={movieid} opts={opts} />}
      </div>
 
  );
}
//options for youtube player
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};
export default Row;
