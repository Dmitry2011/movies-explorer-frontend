import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './Login.css';
import logo from '../../images/logo.svg';
import validationInput from '../../utils/validation';

const Login = ({ login }) => {

  const { enteredValues, handleChange, errors, isFormValid } = validationInput();

    // экземпляр истории для навигации
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!enteredValues.email || !enteredValues.password) {
      return;
    }
    login(enteredValues);
    history.push("/");
  };

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
      <form onSubmit={handleSubmit} id='auth' className='auth__form form'>
        <label className='auth__label'>E-mail
          <input
            className='auth__input'
            id='email'
            name='email'
            type='email'
            required
            value={enteredValues.email || ''}
            onChange={handleChange}
          />
          <span className='auth__error'>{errors.email}</span>
        </label>
        <label className='auth__label'>Пароль
          <input
            className='auth__input'
            id='password'
            name='password'
            type='password'
            required
            value={enteredValues.password || ''}
            onChange={handleChange}
          />
          <span className='auth__error'>{errors.password}</span>
        </label>
      </form>
      <div className='auth__footer'>
        <button form='auth' type='submit' className={!isFormValid ? 'auth__button-auth auth__button-auth-disabled' : 'auth__button-auth'} disabled={!isFormValid}>Войти</button>
        <div className='auth__toreg'>
          <span className='auth__toreg-titke'>Ещё не зарегистрированы?</span>
          <Link to='/signup' className='auth__toreg-link'>Регистрация</Link>
        </div>
      </div>
    </section>
  )
};

export default Login;
