import React from 'react';
import { useLocation } from 'react-router-dom';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { searchFilms, filterFilmsShort } from '../../utils/utils';

const SavedMovies = ({ loggedIn, savedFilms, isLoading, onDelete, setPopupMessage, setIsPopupOpen }) => {

    // состояние чек-бокса "короткометражки"
  const [isFilmsShort , setIsFilmsShort] = React.useState(false);

    // список сохраненных фильмов которые нужно отобразить
  const [showedMovies, setShowedMovies] = React.useState(savedFilms);

    // отфильтрованый массив фильмов
  const [filteredArrayFilms, setFilteredArrayFilms] = React.useState(showedMovies);

    // поисковый запрос
  const [searchQuery, setSearchQuery] = React.useState('');

    // экземпляр истории для навигации
  const location = useLocation();

    // обработчик на сабмит
  const handleSubmitSearch = (inputValue) => {
    const moviesList = searchFilms(savedFilms, inputValue, isFilmsShort);
    setSearchQuery(inputValue);
    if (moviesList.length === 0) {
      setPopupMessage('По введенному запросу ничего не найдено');
      setIsPopupOpen(true);
    } else {
      setFilteredArrayFilms(moviesList);
      setShowedMovies(moviesList);
    }
  }

    // обработчик короткометражек
  const handleShortFilms = () => {
    if (!isFilmsShort) {
      setIsFilmsShort(true);
      localStorage.setItem('shortSavedMovies', true);
      setShowedMovies(filterFilmsShort(filteredArrayFilms));
    } else {
      setIsFilmsShort(false);
      localStorage.setItem('shortSavedMovies', false);
      setShowedMovies(filteredArrayFilms);
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem('shortSavedMovies') === 'true') {
      setIsFilmsShort(true);
      setShowedMovies(filterFilmsShort(savedFilms));
    } else {
      setIsFilmsShort(false);
      const moviesList = searchFilms(savedFilms, searchQuery, isFilmsShort);
      setShowedMovies(moviesList);
    }
  }, [savedFilms, location, isFilmsShort]);

  React.useEffect(() => {
    setFilteredArrayFilms(savedFilms);
  }, [savedFilms]);

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleShortFilms={handleShortFilms}
        isFilmsShort={isFilmsShort}
      />
      <section className='saved-movies'>
        {isLoading &&
        (
          <Preloader />
        )
        }
        {!isLoading &&
        (
          <MoviesCardList
            isSavedMoviesPage={true}
            movies={filteredArrayFilms}
            savedFilms={savedFilms}
            onDelete={onDelete}
          />
        )
        }
      </section>
      <Footer/>
    </>
  )
};

export default SavedMovies;
