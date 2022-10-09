import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navigation = ({loggedIn} ) => {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <nav className='navigation'>
      {loggedIn ? (
        <>
          <div className='navigation__container'>
            <div className='navigation__container-movies'>
              <Link to='/movies' className='navigation__movies'>
                Фильмы
              </Link>
              <Link to='/saved-movies' className='navigation__movies'>
                Сохранённые фильмы
              </Link>
            </div>
            <Link to='/profile' className='navigation__profile'>
              Аккаунт
              <div className='navigation__container-icon'>
                <div className='navigation__profile-icon'/>
              </div>
            </Link>
          </div>
          <BurgerMenu
            isOpen = {isBurgerMenuOpen}
            onClose={toggleBurgerMenu}
          />
          <button type='button' onClick={()=>setIsBurgerMenuOpen(true)} aria-label='Кнопка окрытия меню с навигацией' className='navigation__button'/>
        </>
        )
       :
        (
        <div className='navigation__auth'>
          <Link to='/signup' className='navigation__auth-reg'>
            Регистрация
          </Link>
          <Link to='/signin' className='navigation__auth-log'>
            Войти
          </Link>
        </div>
        )
      }

    </nav>
  )
};

export default Navigation;
