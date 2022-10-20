import React from 'react';
import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';


const BurgerMenu = ({ isOpen, onClose }) => {

  function closeByEsc(event) {
    if (event.key === "Escape") {
      onClose && onClose();
    }

  }
  React.useEffect(() => {
    document.addEventListener("keyup", closeByEsc);
    return () => {
      document.removeEventListener("keyup", closeByEsc);
    };
  }, [onClose]);

  return (
    <div className={isOpen ? 'burger-menu burger-menu_opened' :'burger-menu'}>
      <nav className='burger-menu-container'>
        <div className='burger-menu__container-movies'>
          <NavLink exact to='/' onClick={onClose} className='burger-menu__movies' activeClassName='burger-menu__movies_current'>
            Главная
          </NavLink>
          <NavLink to='/movies' onClick={onClose} className='burger-menu__movies' activeClassName='burger-menu__movies_current'>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' onClick={onClose} className='burger-menu__movies' activeClassName='burger-menu__movies_current'>
            Сохранённые фильмы
          </NavLink>
        </div>
        <NavLink to='/profile' onClick={onClose} className='burger-menu__profile' activeClassName='burger-menu__movies_current'>
          Аккаунт
          <div className='burger-menu__container-icon'>
            <div className='burger-menu__profile-icon'/>
          </div>
        </NavLink>
        <button type='button' className='burger-menu__close-button' onClick={onClose}/>
      </nav>
    </div>
  )
};

export default BurgerMenu;
