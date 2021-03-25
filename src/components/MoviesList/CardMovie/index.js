import React from 'react';
import { Link } from 'react-router-dom';

import posterMissing from '../../../assets/poster_missing.png'

import './styles.css';

const CardMovie = ({ id, original_title, poster_path, overview, release_date, getOneMovie }) => {
  const urlMovie = `/movie/${id}`;

  return (
    <Link
      key={id}
      to={urlMovie}
      onClick={() => {
        getOneMovie(id);
      }}
    >
      <div className="container_cardmovie">
          <div className="movie_poster" 
            style={{
              backgroundImage: poster_path ? `url(https://image.tmdb.org/t/p/w500${poster_path})` : `url(${posterMissing})`
            }}>
          </div>
            <div className="container__header">
                <div className="title">
                  {original_title ? original_title : 'Pas de titre'}
                  ({release_date ? release_date.substring(0, 4) : 'XXXX'})
                </div>
            </div>
          <div className="short_movie_description">
            {overview ? overview.substring(0, 170) : ''}...
          </div>
      </div>
    </Link>
  )
};

export default CardMovie;