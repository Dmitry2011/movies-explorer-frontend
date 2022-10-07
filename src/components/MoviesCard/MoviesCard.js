import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard (props) {

  const [saved, setsaved] = useState(false);

  const [isSavedMoviesPage] = useState(false);

  const toggleSaved = () => {
    setsaved(!saved);
  }
  const toggleDelet = () => {
    setsaved(!saved);
  }

  return (
    <li className='movies-card'>
      <div className = 'movies-card__cover'>
        <img  className = 'movies-card__image' src={props.image} alt={props.description}/>
        <div className='movies-cards__information'>
          <h2 className='movies-card__title'>{props.description}</h2>
          <p className='movies-card__description'>{props.duration}</p>
        </div>
      </div>
      {saved && !isSavedMoviesPage &&
        <button type='button' className='movies-card__button_saved' onClick={toggleSaved} />}
      {isSavedMoviesPage ?
      (
        <button className='movies-card__button_delete' type='button' onClick={toggleDelet} />
      )
      :
      (
        <button
          className={!saved ? 'movies-card__button' : 'movies-card__button_hidden'}
          type='button'
          onClick={toggleSaved}
        >
          Сохранить
        </button>
      )}
    </li>
  );
}

export default MoviesCard;
