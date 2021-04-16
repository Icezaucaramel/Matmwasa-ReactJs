import React from 'react';

import './styles.css';

import CardMovie from './CardMovie';


const MoviesList = ({
    movies,
    getSearchedMovies,
    query,
    setQuery,
    getOneMovie,
    getRandomMovies,
    numberPages
}) => {
    // to generate the pagination, we create a table with the number of pages for our search
    const pageNumbers = [];
    for (let index = 1; index <= numberPages; index++) {
        pageNumbers.push(index);
    }

    return (
        <div className="container__movies-list">
                <div className="header__movies-list">
                    <a href="/">
                        Matmwasa
                    </a>
                </div>
            
            <div className="buttons__movies-list">
                <div
                    className="reload__buttons__movies-list"
                    onClick={() => {
                        getRandomMovies();
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"/></svg>
                </div>
                <div className="research__buttons__movies-list">
                    <form
                        method="POST"
                        onSubmit={(event) => {
                            // cancel the reloading of the page
                            event.preventDefault();
                            // and call the "getSearchedMovies" function
                            getSearchedMovies();
                        }}
                    >
                        <label htmlFor="filmName"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg></label>
                        <input
                            type="text"
                            name="filmName"
                            id="filmName"
                            placeholder="Trouve LE film à mater ce soir !"
                            required
                            value={query}
                            onChange={(event) => {
                                // we assign the content of our input to the "query" variable with "setQuery"
                                setQuery(event.target.value);
                            }}
                        />
                    </form>
                </div>
            </div>
            {/* if there are movies stored in the variable, we display our tags
            if "movies" returns false, we display nothing */}
            {
                movies.length > 0 &&
                (
                    <>
                        <div className="container_card-movie">
                            {
                                movies.map((movie, index) => {
                                    return (
                                        <CardMovie key={index} {...movie} getOneMovie={getOneMovie} />
                                    )
                                })
                                
                            }
                        </div>                        
                        <div className="container__pagination">
                            {
                                pageNumbers.map(pageNumber => {
                                    return (
                                        <a
                                            className="pagination"
                                            onClick={() => {
                                                getSearchedMovies(pageNumber)
                                            }}    
                                        >
                                            {pageNumber}
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default MoviesList;