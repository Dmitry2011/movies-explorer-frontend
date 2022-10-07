import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import films from '../../utils/const';

const MoviesCardList = () => {

  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__elements'>
        {films.map((films) => (
          <MoviesCard
            image = {films.image}
            description = {films.description}
            duration = {films.duration}>
          </MoviesCard>
        ))}
      </ul>

    </section>
  )
};

export default MoviesCardList;
