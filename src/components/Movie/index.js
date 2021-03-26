import React from 'react';
import { useHistory } from 'react-router-dom';

import posterMissing from '../../assets/poster_missing.png'
import bgMissing from '../../assets/poster_path_missing.png'

import './styles.css';

const Movie = ({
    original_title,
    poster_path,
    overview,
    backdrop_path,
    runtime,
    budget,
    vote_average,
    imdb_id
}) => { 
    const history = useHistory();

    return (
        <>
            <div className="return-button" onClick={() => {
                // using the History API to go back to the previous page
                history.goBack();
            }}>
                <svg width="43" height="37" viewBox="0 0 73 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.4947 18.4728V0.472795L72.4947 33.4728L39.4947 66.4728V48.4728H0.49468V18.4728H39.4947Z" fill="white"/>
                </svg>
            </div>
            <div className="container__movie"
            style={{
                backgroundImage: backdrop_path ? `url(https://image.tmdb.org/t/p/original${backdrop_path})` : `url(${bgMissing})`
            }}>
                <div className="header__movie">
                    <div className="affiche__movie">
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                    </div>
                    <div className="description__movie">
                        <div className="title__movie">
                            {original_title}
                        </div>
                        <div className="genre">
                        
                        </div>
                        <div className="summary">
                            {overview}
                        </div>
                        <div className="duration">
                            Durée : {runtime} minutes
                        </div>                  
                    </div>
                </div>
                <div className="footer__movie">
                    <div className="budget">
                        Budget : ${budget}
                    </div>
                    <div className="section__movie">
                        <div className="note_utilisateur">
                            Note Utilisateur
                        </div>
                        <div className="note">
                            <div className="star" style={vote_average > 2 ? {backgroundColor: "#4000FF"} : {backgroundColor: "white"}}></div>
                            <div className="star" style={vote_average > 4 ? {backgroundColor: "#4000FF"} : {backgroundColor: "white"}}></div>
                            <div className="star" style={vote_average > 6 ? {backgroundColor: "#4000FF"} : {backgroundColor: "white"}}></div>
                            <div className="star" style={vote_average > 8 ? {backgroundColor: "#4000FF"} : {backgroundColor: "white"}}></div>
                            <div className="star" style={vote_average > 10 ? {backgroundColor: "#4000FF"} : {backgroundColor: "white"}}></div>
                        </div>
                    </div>
                    <a target="_blank" href={`https://www.imdb.com/title/${imdb_id}`}>
                        <div className="page__officiel">
                            Page Officiel 
                        </div>
                    </a>
                </div> 
            </div>    
        </> 
    );
};

export default Movie;