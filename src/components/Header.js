import React, { useEffect, useState } from "react";
import axios from "axios";
import urls from "./req";
import "../header.css";
const BASE_URL = "https://api.themoviedb.org/3";
const Image_url = "https://image.tmdb.org/t/p/original";

function Header() {
  const [moviebanner, setmovie] = useState(null);
  const [Randommovie, setRandommovie] = useState([])

  useEffect(() => {
    const movielist = async () => {
      var movie = await axios.get(`${BASE_URL}${urls["NetflixOriginal"]}`);
      setRandommovie(Randommovie.push(movie.data.results)) 
      setmovie(
        movie.data.results[
          Math.floor(Math.random() * movie.data.results.length - 1)
        ]
      );
    };
     movielist();
    const inter=setInterval(()=>{
      setmovie(
       Randommovie[0][
          Math.floor(Math.random() * Randommovie?.[0].length-1)+1
        ]
      );
    },15000)
    return ()=>clearInterval(inter)
  },[] );


      
  function turnc(str, n) {
    return str?.length > n ? str.substring(0, n - 20) + "..." : str;
  }
  const style = {
    backgroundSize: "cover",
    backgroundPosition: "cover cover",
    backgroundImage: `url('${Image_url}${moviebanner?.backdrop_path}')`,
  };

  return (
    <div className="outer">
    <header className="banner" style={style}>
    </header>
      <div className="banner_end"></div>
      <div className="banner_detail">
        <div className="banner_title">
          <h1>
            {moviebanner?.title ||
              moviebanner?.name ||
              moviebanner?.orignial_name}
          </h1>
        </div>
        <div className="banner_button">
          <button className="banner_but">Click Me</button>
          <button className="banner_but">Play List</button>
        </div>
        <div className="banner_dis">
          <h1>{turnc(moviebanner?.overview, 150)}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
 