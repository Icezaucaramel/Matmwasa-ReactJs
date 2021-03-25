// npm import
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

// styles
import './styles.css';

// import components
import MoviesList from '../MoviesList';
import Movie from '../Movie';

// component App
const App = () => {
  // variables to connect to API
  const url = "api.themoviedb.org";
  const apiKey = "1344e153c6cb6d973c5ce833b2c913a6";

  // useState === hook
  // en gros, quand tu utilises useState, ça te permet d'utiliser une variable et une fonction qu'on va utiliser pour assigner quelque chose à la variable
  // permet de définir des variables dans notre state, à réutiliser dans nos composants
  // movies est une variable qui stocke les films (résultat de notre recherche/de la génération)
  const [movies, setMovies] = useState([]);
  // query stores what is entered in the input
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState({});

  // getSearchedMovies : OK => when we submit the form, we send a request
  // to the API to retrieve the films according to our search
  const getSearchedMovies = () => {
    // axios allows you to make requests to an API
    axios.get(`https://${url}/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${query}&page=1`)
      .then((response) => {
        // we use "setMovies" to assign the result of our search to the "movies" variable
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOneMovie = () => {

  };

  const getRandomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getMovies = () => {
    const generatedIdMovies = [];

    for (let index = 0; index < 20; index++) {
      const idMovie = getRandomId(1, 100000);
      generatedIdMovies.push(idMovie);
    }

    const generatedMovies = [];

    generatedIdMovies.forEach(idMovie => {
      axios.get(`https://${url}/3/movie/${idMovie}?api_key=${apiKey}&language=fr-FR`)
        .then((response) => {
          generatedMovies.push(response.data);
        })
        .catch((error) => {
          // console.log(error);
        });
      });
  };

  console.log(getMovies());

  return (
    <div className="App">
      <Route exact path="/">
        <MoviesList
          movies={movies}
          getSearchedMovies={getSearchedMovies}
          query={query}
          setQuery={setQuery}
          getOneMovie={getOneMovie}
        />
      </Route>
        
      <Route exact path="/movie">
        <Movie />
      </Route>
    </div>
  );
}

export default App;
