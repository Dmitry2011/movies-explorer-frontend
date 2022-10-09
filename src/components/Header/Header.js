import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

const Header = ({loggedIn}) => {

  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
          <img
            src={logo}
            alt='Логотип'
          />
        </Link>
      <Navigation
      loggedIn={loggedIn}
      />
    </header>
  )
};

export default Header;
