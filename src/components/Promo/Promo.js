import React, { useState } from 'react';
import './Promo.css';
import Header from '../Header/Header';
import promologo from '../../images/promo_logo.svg';
import NavTab from '../NavTab/NavTab';

const Promo = ({loggedIn}) => {

  const [isNavTabMenuOpen, setIsNavTabMenuOpen] = useState(true);
  const toggleNavTab = () => {
    setIsNavTabMenuOpen(!isNavTabMenuOpen);
  }

  return (
    <section className='promo'>
      <Header loggedIn={loggedIn}/>
      <div className='promo__container'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        {isNavTabMenuOpen ? (
        <button onClick={()=>toggleNavTab()} className='promo__info'>
          Узнать больше
        </button>
        )
        :
        (<NavTab
          onClose={toggleNavTab}
        />
        )
      }
        <img alt='Логотип вэб разработчика' src={promologo} className='promo__logo'/>
      </div>
    </section>
  )
};

export default Promo;
