import React from 'react';
import './Techs.css';


const Techs = () => {

  return (
    <section className='techs-background'>
      <div className='techs'>
        <h2 className='techs__title'>Технологии</h2>
        <div className='techs__container'>
          <h3 className='techs__subtitle'>7 технологий</h3>
          <p className='techs__description'>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </div>
        <ul className='techs__container-list'>
          <li className='techs__list-point'>HTML</li>
          <li className='techs__list-point'>CSS</li>
          <li className='techs__list-point'>JS</li>
          <li className='techs__list-point'>React</li>
          <li className='techs__list-point'>Git</li>
          <li className='techs__list-point'>Express.js</li>
          <li className='techs__list-point'>mongoDB</li>
        </ul>
      </div>
    </section>
  )
};

export default Techs;
