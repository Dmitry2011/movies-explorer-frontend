import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {

  return (
    <div className='not-found__container'>
      <div className='not-found__info'>
        <div className='not-found__status'>404</div>
        <div className='not-found__description'>Страница не найдена</div>
      </div>
      <Link to='/'>
        <button type='button' className='not-found__back-button'>Назад</button>
      </Link>
    </div>
  )
};

export default NotFound;
