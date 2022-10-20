import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import screenWidth from '../../utils/screenWidth';
import { checkFilmsSaved } from '../../utils/utils';
import {
  BIG_SCREEN_FILMS,
  MIDDLE_SCREEN_FILMS,
  SMALL_SCREEN_FILMS,
  MORE_FILMS_BIG_SCREEN,
  MORE_FILMS_SMALL_SCREEN,
  BIG_SCREEN,
  SMALL_SCREEN
} from '../../utils/constants';

const MoviesCardList = ({ movies, isSavedMoviesPage, onSave, onDelete, savedFilms }) => {

    // список фильмов которые нужно показать
  const [showFilms, setShowFilms] = React.useState(movies);

    // текущая ширина экрана
  const currentScreenWidth = screenWidth();

    // счетчик просмотренных фильмов
  const searchedMoviesCount = movies ? movies.length : 0;

    // добавление фильмов при клике
  const addMoreFilms = () => {
    if (currentScreenWidth > BIG_SCREEN) {
      setShowFilms(movies.slice(0, showFilms.length + MORE_FILMS_BIG_SCREEN))
    } else {
      setShowFilms(movies.slice(0, showFilms.length + MORE_FILMS_SMALL_SCREEN))
    }
  }

  React.useEffect(() => {
    if (isSavedMoviesPage) {
      setShowFilms(movies.slice(0, Infinity))
    } else if (currentScreenWidth > BIG_SCREEN) {
      setShowFilms(movies.slice(0, BIG_SCREEN_FILMS))
    } else if (currentScreenWidth > SMALL_SCREEN && currentScreenWidth <= BIG_SCREEN) {
      setShowFilms(movies.slice(0, MIDDLE_SCREEN_FILMS));
    } else if (currentScreenWidth <= SMALL_SCREEN) {
      setShowFilms(movies.slice(0, SMALL_SCREEN_FILMS));
    } else {
      setShowFilms(movies);
    }
  }, [currentScreenWidth, movies])

  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__elements'>
        {showFilms.sort().map((movie) => {
          return <MoviesCard
            key={isSavedMoviesPage ? movie.movieId : movie.id}
            movie={movie}
            isSavedMoviesPage={isSavedMoviesPage}
            onSave={onSave}
            onDelete={onDelete}
            saved={checkFilmsSaved(savedFilms, movie)}
            />
        })}
      </ul>
      {!isSavedMoviesPage && showFilms && searchedMoviesCount !== showFilms.length &&
      (
        <button
          type='button'
          className='movies-card-list__button-next'
          onClick={addMoreFilms}
        >
          Ещё
        </button>
      )
      }
    </section>
  )
};

export default MoviesCardList;
