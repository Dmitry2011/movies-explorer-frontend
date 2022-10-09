import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

const Main = ({loggedIn}) => {

  return (
    <>
      <main className='page__main'>
        <Promo loggedIn={loggedIn}/>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
      </main>
      <Footer/>
    </>
  )
};

export default Main;
