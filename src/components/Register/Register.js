import React from 'react';
import './Register.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import validationInput from '../../utils/validation';

const Register = ({ register }) => {

  const { enteredValues, handleChange, errors, isFormValid } = validationInput();


    // обработчик сабмита
  const handleSubmit = async (event) => {
    event.preventDefault();
    register(enteredValues);

  };

  return (
    <section className='register__container'>
      <div className='register__header'>
        <Link to='/' className='register__logo'>
          <img
            src={logo}
            alt='Логотип'
          />
        </Link>
      <div className='register__title'>Добро пожаловать!</div>
      </div>
      <form id='register' className='register__form form' onSubmit={handleSubmit}>
        <label className='register__label'>Имя
          <input
            className='register__input'
            id='name'
            name='name'
            type='text'
            required
            minLength="2"
            maxLength="30"
            value={enteredValues.name || ''}
            onChange={handleChange}
          />
          <span className='register__error'>{errors.name}</span>
        </label>
        <label className='register__label'>E-mail
          <input
            className='register__input'
            id='email'
            name='email'
            type='email'
            required
            value={enteredValues.email || ''}
            onChange={handleChange}
            pattern={'^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'}
          />
          <span className='register__error'>{errors.email}</span>
        </label>
        <label className='register__label'>Пароль
          <input
            className='register__input'
            id='password'
            name='password'
            type='password'
            required
            value={enteredValues.password || ''}
            onChange={handleChange}
          />
          <span className='register__error'>{errors.password}</span>
        </label>
      </form>
      <div className='register__footer'>
        <button form='register' type='submit' className={!isFormValid ? 'register__button-reg register__button-reg-disabled' : 'register__button-reg'} disabled={!isFormValid}>Зарегистрироваться</button>
        <div className='register__toauth'>
          <span className='register__toauth-titke'>Уже зарегистрированы?</span>
          <Link to='/signin' className='register__toauth-link'>Войти</Link>
        </div>
      </div>
    </section>
  )
};

export default Register;
