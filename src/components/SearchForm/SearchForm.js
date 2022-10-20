import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import validationInput from '../../utils/validation';

const SearchForm = ({ handleSubmitSearch, handleShortFilms, isFilmsShort }) => {

  const { enteredValues, handleChange, isFormValid } = validationInput();

    // экземпляр истории для навигации
  const location = useLocation();

    // обработчик сабмита
  function handleFormSubmit(event) {
    event.preventDefault();
    handleSubmitSearch(enteredValues.searchInput, isFormValid, isFilmsShort);
  }

  React.useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('movieSearch')) {
      const searchValue = localStorage.getItem('movieSearch');
      enteredValues.searchInput = searchValue;
    }
  }, [location]);

  return (
    <section className='search-form-border'>
      <div className='search-form'>
        <div className='search-form__icon'/>
        <form className='search-form__form form' onSubmit={handleFormSubmit} noValidate>
          <input
            type='text'
            className='search-form__input'
            name='searchInput'
            placeholder='Фильм'
            required
            value={enteredValues.searchInput || ''}
            onChange={handleChange}
          />
          <button
            type='submit'
            className={!isFormValid ? 'search-form__button search-form__button-disabled' : 'search-form__button'}
            disabled={!isFormValid}
          >
            Найти
          </button>
        </form>
        <FilterCheckbox
          isFilmsShort={isFilmsShort}
          handleShortFilms={handleShortFilms}
        />
      </div>
    </section>
  )
};

export default SearchForm;
