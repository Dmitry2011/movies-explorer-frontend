import React from 'react';
import './NotFound.css';
import {useHistory} from 'react-router-dom';

const NotFound = () => {

    // экземпляр истории для навигации
  const history = useHistory();

    // функция перехода на предыдущую в истории страницу
  const goBackPage = () => {
    history.goBack()
  }

  return (
    <div className='not-found__container'>
      <div className='not-found__info'>
        <div className='not-found__status'>404</div>
        <div className='not-found__description'>Страница не найдена</div>
      </div>
      <button onClick = {goBackPage}type='button' className='not-found__back-button'>Назад</button>
    </div>
  )
};

export default NotFound;
