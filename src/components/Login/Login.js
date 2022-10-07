import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Login = () => {

  return (
    <section className='auth__container'>
      <div className='auth__header'>
        <Link to='/' className='auth__logo'>
          <img
            src={logo}
            alt='Логотип'
          />
        </Link>
      <div className='auth__title'>Рады видеть!</div>
      </div>
      <form id='auth' className='auth__form'>
        <label className='auth__label'>E-mail
          <input
            className='auth__input'
            id='email'
            name='email'
            type='email'
            required
          />
          <span className='auth__error'>Необходимо ввести E-mail</span>
        </label>
        <label className='auth__label'>Пароль
          <input
            className='auth__input'
            id='password'
            name='password'
            type='password'
            required
          />
          <span className='auth__error'>Что-то пошло не так...</span>
        </label>
      </form>
      <div className='auth__footer'>
        <button form='auth' type='submit' className='auth__button-auth'>Войти</button>
        <div className='auth__toreg'>
          <span className='auth__toreg-titke'>Ещё не зарегистрированы?</span>
          <Link to='/signup' className='auth__toreg-link'>Регистрация</Link>
        </div>
      </div>
    </section>
  )
};

export default Login;
