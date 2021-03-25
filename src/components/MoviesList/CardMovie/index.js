import React from 'react';

import './styles.css';

const CardMovie = ({ id, original_title, overview, release_date, getOneMovie }) => {
const description = overview.substring(0, 170);

  return (
    <div className="container_cardmovie" key={id}>
        <div className="movie_poster"></div>

          <div className="container__header">
            <a>
              <div
                className="title"
                onClick={() => {
                  getOneMovie(id);
                }}
              >
                {original_title}
                ({release_date.substring(0, 4)})
              </div>
            </a>
          </div>
        <div className="short_movie_description">
          {description}

        </div>
    </div>
  )
};

export default CardMovie;