import React from 'react';
import './Footer.css';


const Footer = () => {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className='footer'>
      <span className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </span>
      <div className='footer__container'>
        <div className='footer__container-copyright'>
          © {getCurrentYear()}
        </div>
        <nav className='footer__container-link'>
          <a href='https://practicum.yandex.ru/' target='_blank' rel='noopener noreferrer' className='footer__link'>Яндекс.Практикум</a>
          <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='footer__link'>Github</a>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;
