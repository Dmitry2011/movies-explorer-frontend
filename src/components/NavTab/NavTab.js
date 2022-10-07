import React from 'react';
import './NavTab.css';
import { Link } from 'react-scroll';

const NavTab = ({ onClose }) => {

  return (
    <section className='nav-tab'>
      <Link to='about-project' className='nav-tab__link' duration={500} smooth={true} onClick={onClose}>О проекте</Link>
      <Link to='techs' className='nav-tab__link' duration={500} smooth={true} onClick={onClose}>Технологии</Link>
      <Link to='about-me' className='nav-tab__link' duration={500} smooth={true} onClick={onClose}>Студент</Link>
    </section>
  )
};

export default NavTab;
