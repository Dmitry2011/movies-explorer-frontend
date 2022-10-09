import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = ({loggedIn}) => {

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <SearchForm/>
      <section className='saved-movies'>
        <Preloader/>
        <MoviesCardList/>
      </section>
      <Footer/>
    </>
  )
};

export default SavedMovies;
