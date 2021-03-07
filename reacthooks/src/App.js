import React, { useState } from "react";
import "./App.css";
import Cardi from "./Components/Card";
import MovieList from "./Components/movieList";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalAdd from "./Components/modalpop";
import SearchBox from "./Components/Filter";
import { Button, Modal } from "react-bootstrap";
import modalAdd from "./Components/modalpop";
import { Switch, Link, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter } from "react-router-dom";
import MoreAbout from "./Components/MoreAbout";
function App() {
  const [movies, setMovies] = useState([
    {
      Id: uuidv4(),
      Title: "Moonlight",
      Description: "Es handelt sich um ein Junge, der ....",
      PosterUrl:
        "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
      Rate: 4,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9NJj12tJzqc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      Id: uuidv4(),
      Title: "The great Gatsby",
      Description: "Es handelt sich um einen Mann, der ....",
      PosterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71oI1YEWt8L._AC_SL1200_.jpg",
      Rate: 3,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9NJj12tJzqc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      Id: uuidv4(),
      Title: "The Fault in our Stars",
      Description: "Es handelt sich um zwei Freunde, die an Krebs leiden ....",
      PosterUrl:
        "https://nesmedia2017.files.wordpress.com/2016/08/tfios-poster.jpg",
      Rate: 5,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9NJj12tJzqc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      Id: uuidv4(),
      Title: "Frida",
      Description: "Es handelt sich um eine Frau, die ....",
      PosterUrl:
        "https://i.pinimg.com/originals/a7/37/12/a73712912287f0463e31c0a366066000.jpg",
      Rate: 4,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9NJj12tJzqc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      Id: uuidv4(),
      Title: "The Loft",
      Description: "Es geht darum, ...",
      PosterUrl: "https://vistapointe.net/images/the-loft-2.jpg",
      Rate: 2,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9NJj12tJzqc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      Id: uuidv4(),
      Title: "The Joker",
      Description: "Es geht darum, ...",
      PosterUrl:
        "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
      Rate: 1,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9NJj12tJzqc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
  ]);

  const [searchValue, setSearchValue] = useState("");

  const addMovie = (newmovie) => {
    setMovies([...movies, newmovie]);
  };

  const search = (text) => {
    setSearchValue(text);
  };
  const [keyRate, setKeyRate] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h1 className="header">Movie Database</h1>
        </div>
        <div className="SearchBar">
          <SearchBox
            search={search}
            setKeyRate={setKeyRate}
            keyRate={keyRate}
          />
          <ModalAdd addmovie={addMovie} />
        </div>

        <div
          className="row"
          style={{ display: "flex", justifyContent: "spaceBetween" }}
        >
          <MovieList
            className="MovieList"
            movies={movies.filter(
              (movie) =>
                movie.Rate >= keyRate &&
                movie.Title.toLowerCase().includes(
                  searchValue.toLowerCase().trim()
                )
            )}
          />
        </div>

        <Route
          path="/Movie/:id"
          render={(props) => <MoreAbout {...props} movies={movies} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
