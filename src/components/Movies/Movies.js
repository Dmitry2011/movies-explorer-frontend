import React from 'react';
import { useLocation } from 'react-router-dom';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { searchFilms, filterFilmsShort } from '../../utils/utils';
import moviesApi from '../../utils/MoviesApi';

const Movies = ({ loggedIn, isLoading, setPopupMessage, setIsPopupOpen, savedFilms, setIsLoading, onSave }) => {

    // состояние чек-бокса "короткометражки"
  const [isFilmsShort , setIsFilmsShort] = React.useState(false);

    // массив фильмов
  const [arrayFilms, setArrayFilms] = React.useState([]);

    // отфильтрованый массив фильмов (короткометражки)
  const [filteredArrayFilms, setFilteredArrayFilms] = React.useState([]);

    // все фильмы доступные для поиска
  const [allFilms, setAllFilms] = React.useState([]);

    // экземпляр истории для навигации
  const location = useLocation();

    // обработчик фильтрации фильмов
  const handleFilteredFilms = (movies, userQuery, shortMoviesCheckbox) => {
    const moviesList = searchFilms(movies, userQuery, false);
    if (moviesList.length === 0) {
      setPopupMessage('По введенному запросу ничего не найдено');
      setIsPopupOpen(true);
    } else
    setArrayFilms(moviesList);
    setFilteredArrayFilms(
      shortMoviesCheckbox ? filterFilmsShort(moviesList) : moviesList
    );
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }

    // обработчик на сабмит
  const handleSubmitSearch = (inputValue) => {
    localStorage.setItem('searchFilms', inputValue);
    localStorage.setItem('shortFilms', isFilmsShort);
    if (allFilms.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then(movies => {
          localStorage.setItem('allMovies', JSON.stringify(movies));
          setAllFilms(movies);
          handleFilteredFilms(
            movies,
            inputValue,
            isFilmsShort
          );
        })
        .catch((error) => {
          setPopupMessage(`Что то пошло не так ${error}`);
          setIsPopupOpen(true);
        })
        .finally(() => setIsLoading(false));
    } else {
      handleFilteredFilms(allFilms, inputValue, isFilmsShort);
    }
  }

    // обработчик короткометражек
  const handleShortFilms = () => {
    setIsFilmsShort(!isFilmsShort);
    if (!isFilmsShort) {
      setFilteredArrayFilms(filterFilmsShort(arrayFilms));
    } else {
      setFilteredArrayFilms(arrayFilms);
    }
    localStorage.setItem('shortFilms', !isFilmsShort);
  }

  React.useEffect(() => {
    if (localStorage.getItem('shortFilms') === 'true') {
      setIsFilmsShort(true);
    } else {
      setIsFilmsShort(false);
    }
  }, [location]);

  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(
        localStorage.getItem('movies')
      );
      setArrayFilms(movies);
      if (
        localStorage.getItem('shortFilms') === 'true'
      ) {
        setFilteredArrayFilms(filterFilmsShort(movies));
      } else {
        setFilteredArrayFilms(movies);
      }
    }
  }, [location]);

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleShortFilms={handleShortFilms}
        isFilmsShort={isFilmsShort}
      />
      <section className='movies'>
        {isLoading &&
        (
          <Preloader />
        )
        }
        {!isLoading &&
        (
          <MoviesCardList
            isSavedMoviesPage={false}
            movies={filteredArrayFilms}
            savedFilms={savedFilms}
            onSave={onSave}
          />
        )
        }
      </section>
      <Footer/>
    </>
  )
};

export default Movies;
