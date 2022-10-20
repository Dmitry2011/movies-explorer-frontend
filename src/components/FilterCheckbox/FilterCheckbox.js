import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ isFilmsShort, handleShortFilms }) => {

  return (
    <section className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          id='filter-checkbox'
          onChange={handleShortFilms}
          checked={isFilmsShort}
        />
        Короткометражки
      </label>
    </section>
  )
};

export default FilterCheckbox;
