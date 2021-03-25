// npm import
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
// axios allows you to make requests to an API
import axios from 'axios';

// styles
import './styles.css';

// import components
import MoviesList from '../MoviesList';
import Movie from '../Movie';

// component App
const App = () => {
  // useState === hook
  // info : https://fr.reactjs.org/docs/hooks-state.html
  // hook which allows to benefit from a local state without having to write classes
  // the "react-redux" package allows to benefit from a global state (not use for this project)
  // info : https://react-redux.js.org/introduction/getting-started
  // l'intérêt d'utiliser "useState" est de ne pas perdre le contenu d'une variable suite à un changement de page, et de pouvoir lui assigner facilement du contenu grâce à une fonction
  // attention /!\ utiliser "useState" n'empêche pas la perte du state lors du rechargement de l'application. pour cela, il faudrait stocker les données dans le local storage
  // info : https://www.robinwieruch.de/local-storage-react

  // "movies" stores the films (search/generation result)
  const [movies, setMovies] = useState([]);
  // "query" stores what is entered in the input
  const [query, setQuery] = useState('');
  // "movie" stores information from a movie after clicking on a card
  const [movie, setMovie] = useState({});
  const [numberPages, setNumberPages] = useState(1);
  
  // variables to connect to API
  const url = 'api.themoviedb.org';
  const apiKey = '1344e153c6cb6d973c5ce833b2c913a6';

  // getSearchedMovies : OK => when we submit the form, we send a request
  // to the API to retrieve the films according to our search
  const getSearchedMovies = (pageNumber) => {
    axios.get(`https://${url}/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${query}&page=${pageNumber}`)
      .then((response) => {
        // we use "setMovies" to assign the result of our search to the "movies" variable
        setNumberPages(response.data.total_pages);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // getOneMovie : OK => request to have the data on the film 
  const getOneMovie = (id) => {
    axios.get(`https://${url}/3/movie/${id}?api_key=${apiKey}&language=fr-FR`)
    .then((response) => {
      // we use "setMovie" to assign the result of the query to the "movie" variable
      setMovie(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  const randomPage = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // getRandomMovies : KO => request to retrieve a random list of films
  // for the movie generation function to work, the API link for trending movies was used
  // but it's impossible to use it when starting the application, because it triggers an infinite loop (call the function => render the application => which triggers a new call)
  const getRandomMovies = () => {
    const pageNumber = randomPage(1, 1000);

    axios.get(`https://${url}/3/trending/all/day?api_key=${apiKey}&page=${pageNumber}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const getRandomId = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  // const randomIdMovies = [];

  // // generation of 20 ids of films
  // for (let index = 0; index < 20; index++) {
  //   const id = getRandomId(1, 100000);
  //   randomIdMovies.push(id);
  // };

  // const randomMovies = [];

  // const requestForOneMovie = (id) => {
  //   return axios.get(`https://${url}/3/movie/${id}?api_key=${apiKey}&language=fr-FR`)
  //     .then((response) => {
  //       return response.data;
  //     });
  // };

  // const getRandomMovies = () => {
  //   randomIdMovies.forEach(randomIdMovie => {
  //     requestForOneMovie(randomIdMovie).then(data => {
  //       randomMovies.push(data);
  //       return randomMovies;
  //     });
  //   })
  // };

  // console.log(getRandomMovies());

  // rendering of the component
  return (
    <div className="App">
      {/* definition of routing */}
      <Route exact path="/">
        <MoviesList
          movies={movies}
          getSearchedMovies={getSearchedMovies}
          query={query}
          setQuery={setQuery}
          getOneMovie={getOneMovie}
          getRandomMovies={getRandomMovies}
          numberPages={numberPages}
        />
      </Route>
      
      {/* a parameter (:id) is used in the route to display a particular film */}
      <Route exact path="/movie/:id">
        <Movie
          // we use the spread to decompose our object
          // info : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax
          {...movie}
        />
      </Route>
    </div>
  );
};

// default (unnamed) export of the component
// also possible to do => export { App };
export default App;
