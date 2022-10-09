import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Profile = (loggedIn) => {

  return (
    <section className='profile'>
      <Header loggedIn={loggedIn}/>
      <div className='profile__title'>Привет, Виталий!</div>
      <form id='profile' className='profile__form'>
        <label className='profile__label'>
          Имя
          <input
            className='profile__input'
            id='name'
            name='name'
            type='text'
            required
            minLength="2"
            maxLength="30"
          />
          <span className='profile__error'>Минимум 2 символа</span>
        </label>
        <label className='profile__label'>
          E-mail
          <input
            className='profile__input'
            id='email'
            name='email'
            type='email'
            required
          />
          <span className='profile__error'>Необходимо ввести E-mail</span>
        </label>
      </form>
      <div className='profile__footer'>
        <button form='profile' type='submit' className='profile__button-edit'>Редактировать</button>
        <Link to='/'>
          <button type='button' className='profile__button-exit'>Выйти из аккаунта</button>
        </Link>
      </div>
    </section>
  )
};

export default Profile;
