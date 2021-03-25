import React from 'react';

import './styles.css';

const Movie = () => {
    return (
        <div className="container__Movie">
            <div className="header__Movie">
                <div className="affiche__Movie"></div>
                <div className="description__Movie">
                    <div className="title__Movie"> FILM</div>
                    <div className="genre">Action/thriller</div>
                    <div className="summary">Stéphane, tout juste arrivé de Cherbourg, intègre la Brigade Anti-Criminalité de Montfermeil, dans le 93. Il va faire la rencontre de ses nouveaux coéquipiers, Chris et Gwada, deux "Bacqueux" d’expérience. Il découvre rapidement les tensions entre les différents groupes du quartier. Alors qu’ils se trouvent débo</div>
                    <div className="duration">Durée : 1h30</div>                  
                </div>
            </div>
            <div className="footer__Movie">
                <div className="Budget"> Budget :$63 000 000</div>
                <div className="section__movie">
                    <div className="Note">8,65</div>
                    <div className="Note_utilisateur"> Note Utilisateur </div>
                </div>
                <div className="Revenu"> Revenu : $100 853 753 </div>
            </div>     
        </div>
    );
};

export default Movie;