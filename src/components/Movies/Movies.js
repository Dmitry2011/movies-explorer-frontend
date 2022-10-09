import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = ({loggedIn}) => {

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <SearchForm/>
      <section className='movies'>
        <Preloader/>
        <MoviesCardList/>
        <button type='submit' className='movies__button-next'>Ещё</button>
      </section>
      <Footer/>
    </>
  )
};

export default Movies;
