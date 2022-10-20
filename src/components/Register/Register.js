import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Register = () => {

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
      <form id='register' className='register__form'>
        <label className='register__label'>Имя
          <input
            className='register__input'
            id='name'
            name='name'
            type='text'
            required
            minLength="2"
            maxLength="30"
          />
          <span className='register__error'>Минимум 2 символа</span>
        </label>
        <label className='register__label'>E-mail
          <input
            className='register__input'
            id='email'
            name='email'
            type='email'
            required
          />
          <span className='register__error'>Необходимо ввести E-mail</span>
        </label>
        <label className='register__label'>Пароль
          <input
            className='register__input'
            id='password'
            name='password'
            type='password'
            required
          />
          <span className='register__error'>Что-то пошло не так...</span>
        </label>
      </form>
      <div className='register__footer'>
        <button form='register' type='submit' className='register__button-reg'>Зарегистрироваться</button>
        <div className='register__toauth'>
          <span className='register__toauth-titke'>Уже зарегистрированы?</span>
          <Link to='/signin' className='register__toauth-link'>Войти</Link>
        </div>
      </div>
    </section>
  )
};

export default Register;
