import React from 'react';
import './MoviesCard.css';
import screenWidth from '../../utils/screenWidth';
import { convertTime } from '../../utils/utils';

function MoviesCard ( { isSavedMoviesPage, movie, onSave, onDelete, saved }) {

    // текущая ширина экрана
  const currentScreenWidth = screenWidth();

    // сотояние страницы "мобильная"
  const [isMobile, setIsMobile] = React.useState(false);

    // сохранить фильм
  const handleSaveCard = () => {
    onSave(movie);
  };

    // удалить фильм
  const handleDeleteCard = () => {
    onDelete(movie);
  };

  React.useEffect(() => {
    if (currentScreenWidth < 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [currentScreenWidth]);

  return (
    <li className='movies-card'>
      <div className='movies-card__cover'>
        <a href={movie.trailerLink} className="movies-card__link" target="_blank" rel='noopener noreferrer'>
          <img  className='movies-card__image' src={isSavedMoviesPage ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`} alt={`Обложка фильма: ${movie.nameRU}`}/>
        </a>
        <div className='movies-cards__information'>
          <h2 className='movies-card__title'>{movie.nameRU}</h2>
          <p className='movies-card__description'>{convertTime(movie.duration)}</p>
        </div>
      </div>
      {saved && !isSavedMoviesPage &&
        <button type='button' className='movies-card__button_saved' onClick={handleSaveCard}/>
      }
      {isSavedMoviesPage ?
      (
        <button className='movies-card__button_delete' type='button' onClick={handleDeleteCard} />
      )
      :
      (
        <button
          className={!saved ? 'movies-card__button' : 'movies-card__button_hidden'}
          type='button'
          onClick={handleSaveCard}
        >
          Сохранить
        </button>
      )}
      {isMobile && isSavedMoviesPage && (
        <button className='movies-card__button_delete movies-card__button_delete-visible' type='button' onClick={handleDeleteCard} />
      )}
      {isMobile && !isSavedMoviesPage && !saved && (
        <button
          className='movies-card__button'
          type='button'
          onClick={handleSaveCard}
        >
          Сохранить
        </button>
      )}
    </li>
  );
}

export default MoviesCard;
