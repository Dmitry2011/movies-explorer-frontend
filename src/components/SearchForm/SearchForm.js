import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {

  return (
    <section className='search-form-border'>
      <div className='search-form'>
        <div className='search-form__icon'/>
        <form id='search-form' className='search-form__form'>
          <input
            className='search-form__input'
            id='search-input'
            name='search-input'
            placeholder='Фильм'
            required
          />
          <button type='submit' className='search-form__button'>
            Найти
          </button>
        </form>
        <FilterCheckbox/>
      </div>
    </section>
  )
};

export default SearchForm;
