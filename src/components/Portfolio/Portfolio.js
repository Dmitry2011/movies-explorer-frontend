import React from 'react';
import './Portfolio.css';
import linkicon from '../../images/link_icon.svg';

const Portfolio = () => {

  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__list-point'>
          <a href='https://github.com/Dmitry2011/how-to-learn' target='_blank' rel='noopener noreferrer' className='portfolio__link'>
            <h4 className='portfolio__subtitle'>Статичный сайт</h4>
            <img src={linkicon} alt='Иконка для перехода по ссылке' className='portfolio__link-img'/>
          </a>
        </li>
        <li className='portfolio__list-point'>
          <a href='https://dmitry2011.github.io/russian-travel/' target='_blank' rel='noopener noreferrer' className='portfolio__link'>
            <h4 className='portfolio__subtitle'>Адаптивный сайт</h4>
            <img src={linkicon} alt='Иконка для перехода по ссылке' className='portfolio__link-img'/>
          </a>
        </li>
        <li className='portfolio__list-point'>
          <a href='http://dmitrys.nomorepartiesxyz.ru/' target='_blank' rel='noopener noreferrer' className='portfolio__link'>
            <h4 className='portfolio__subtitle'>Одностраничное приложение</h4>
            <img src={linkicon} alt='Иконка для перехода по ссылке' className='portfolio__link-img'/>
          </a>
        </li>
      </ul>
    </section>
  )
};

export default Portfolio;
