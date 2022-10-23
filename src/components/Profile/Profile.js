import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import validationInput from '../../utils/validation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const Profile = ({ loggedIn, updateUser, signOut, setPopupMessage, setIsPopupOpen }) => {

    // текущий пользователь
  const currentUser = React.useContext(CurrentUserContext);

  const { enteredValues, handleChange, errors, resetForm, isFormValid } = validationInput();

    // обработчик сабмита
  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredValues.name !== currentUser.name || enteredValues.email !== currentUser.email) {
      updateUser({
        name: enteredValues.name,
        email: enteredValues.email,
      })
    } else {
      setPopupMessage('Вы не внесли изменения в свои данные. Измените имя или email.');
      setIsPopupOpen(true);
    }
  }

  React.useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm();
  }, [currentUser, resetForm]);


  return (
    <section className='profile'>
      <Header loggedIn={loggedIn}/>
      <div className='profile__title'>Привет, {currentUser.name}!</div>
      <form id='profile' className='profile__form form' onSubmit={handleSubmit}>
        <label className='profile__label'>
          Имя
          <input
            className='profile__input'
            id='name'
            name='name'
            type='text'
            required
            minLength="2"
            maxLength="30"
            value={enteredValues.name || ''}
            onChange={handleChange}
          />
          <span className='profile__error'>{errors.name}</span>
        </label>
        <label className='profile__label'>
          E-mail
          <input
            className='profile__input'
            id='email'
            name='email'
            type='email'
            required
            value={enteredValues.email || ''}
            onChange={handleChange}
          />
          <span className='profile__error'>{errors.email}</span>
        </label>
      </form>
      <div className='profile__footer'>
        <button form='profile' type='submit' className={!isFormValid ? 'profile__button-edit profile__button-edit-disabled' : 'profile__button-edit'} disabled={!isFormValid}>Редактировать</button>
        <Link to='/'>
          <button type='button' className='profile__button-exit' onClick={() => signOut()}>Выйти из аккаунта</button>
        </Link>
      </div>
    </section>
  )
};

export default Profile;
