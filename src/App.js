import React, { useEffect, useState } from "react";
import "./App.css";
import Row from "./components/Row";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  const [play, setplay] = useState(false);
  const playing = (type) => {
    console.log("App class", type);
    setplay(type);
  };
  useEffect(() => {}, [play]);
  return (
    <div className="App">
      <Nav />
      <Header />
      <Row
        title="Trending Now"
        type={"trending"}
        playing={playing}
        play={play}
      />
      <Row
        title="Top Rated"
        type={"NetflixOriginal"}
        iswidth
        playing={playing}
        play={play}
      />
      <Row
        title="Action Movies"
        type={"TopRated"}
        playing={playing}
        play={play}
      />
      <Row
        title="Comedy Movies"
        type={"ComedyMovies"}
        playing={playing}
        play={play}
      />
      <Row
        title="Horror Movies"
        type={"HorrorMovies"}
        iswidth
        playing={playing}
        play={play}
      />
      <Row
        title="Romance Movies"
        type={"RomanceMovies"}
        playing={playing}
        play={play}
      />
      <Row
        title="Documentary Movies"
        type={"DocumentariesMovies"}
        playing={playing}
        play={play}
      />
    </div>
  );
}

export default App;
