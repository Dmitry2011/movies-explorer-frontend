import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import myphoto from '../../images/my.jpg';

const AboutMe = () => {

  return (
    <section className='about-me'>
      <h2 className='about-me-title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__info-student'>
          <div>
            <h3 className='about-me__name'>
              Дмитрий
            </h3>
            <p className='about-me__description'>
              Вэб-разработчик, 32 года
            </p>
            <p className='about-me__description'>
              Я родился и живу в городе Братске, закончил факультет кибернетики в ИрГТУ. У меня есть жена и двое сыновей. Увлекаюсь бегом, люблю разбираться в неисправных механизмах и процессах. В 2022 г начал учится веб-разработке, параллельно работаю по основной работе в сфере автоматизации производства. После завершения обучения планирую совмещать текущую трудовую деятельность со второй работай в сфере веб-разработки.
            </p>
          </div>
          <a href='https://github.com/Dmitry2011?tab=repositories' target='_blank' rel='noopener noreferrer' className='about-me__link'>Github</a>
        </div>
        <img src={myphoto} alt='Фото студента' className='about-me__photo'/>
      </div>
      <Portfolio></Portfolio>
    </section>
  )
};

export default AboutMe;
