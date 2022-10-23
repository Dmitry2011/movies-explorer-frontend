import '../../../src/index.css';
import React from 'react';
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import './App.css';
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import PopupMessage from "../PopupMessage/PopupMessage";
import mainApi from '../../utils/MainApi';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {

    // состояние всплывающего окна
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    // текущий пользователь
  const [currentUser, setCurrentUser] = React.useState({});

    // текст сообщения в всплывающем окне
  const [popupMessage, setPopupMessage] = React.useState('');

    // состояние авторизирован
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    // состояние прелоадера
  const [isLoading, setIsLoading] = React.useState(false);

    // сохраненные фильмы
  const [savedFilms, setSavedFilms] = React.useState([]);

    // экземпляр истории для навигации
  const history = useHistory();

    // закрытие попапа
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupMessage('');
  };

    // при перезагрузке странице проверяем токен на валидность, авторизированному пользователю не нужно повторно вводить логин пароль
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    mainApi.getData(token)
      .then((data) => {
        console.log(data)
        setIsLoggedIn(true)
        handleTokenCheck(token);
      })
      .catch((error) => {
        signOut();
          setPopupMessage(`Что то пошло не так с вашим цифровым ключем, авторизируйтесь ${error}`);
          setIsPopupOpen(true);
          setIsLoggedIn(false)
          history.push("/signin")
      })
  }, [])


    // регистрация
  const handleRegistration = async ({ name, email, password }) => {
    return mainApi.register({ name, email, password })
      .then(() => {
        handleAuthorization({ email, password });
        history.push("/signin");
      })
      .catch(error => {
          setPopupMessage(`При регистрации произошла ошибка. ${error}`);
          setIsPopupOpen(true);
      });
  };

    // авторизация
  const handleAuthorization = async (data) => {
    return mainApi.authorize(data)
      .then((data) => {
        setIsLoading(true);
        setIsLoggedIn(true);
        localStorage.setItem('token', data.token);
        mainApi.getToken(data.token);
        history.push('/movies');
        Promise.all([mainApi.getContent(data.token), mainApi.getSavedMovies(data.token)])
          .then(([userInfo, userMovies]) => {
            setCurrentUser(userInfo);
            localStorage.setItem('savedMovies', JSON.stringify(userMovies));
            setSavedFilms(userMovies);
          })
          .catch(error => {
            console.log(`Что то пошло не так... ${error}`);
          })
          .finally(() => {
            setIsLoading(false);
          })
      })
      .catch(error => {
        setPopupMessage(`При авторизации произошла ошибка. ${error}`);
        setIsPopupOpen(true);
        history.push('/signin');
      });
  };

    // функция сохранения фильмов
  const handleSaveFilms = (movie) => {
    const handledMovie = savedFilms.find(item => {
      return item.movieId === movie.id
    });
    const isLiked = Boolean(handledMovie);
    const id = handledMovie ? handledMovie._id : null;
    if (isLiked) {
      mainApi.deleteMovie(id)
        .then((card) => {
          const updatedSavedMovies = savedFilms.filter(item => card._id !== item._id);
          localStorage.setItem('savedMovies', updatedSavedMovies);
          setSavedFilms(updatedSavedMovies);
        })
        .catch(error => {
          setPopupMessage(`При удалении произошла ошибка. ${error}`);
          setIsPopupOpen(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      mainApi.saveMovie(movie)
        .then((newSavedMovie) => {
          setSavedFilms((prev) => [...prev, newSavedMovie]);
        })
        .catch((error) => {
          setPopupMessage(`При сохранении произошла ошибка. ${error}`);
          setIsPopupOpen(true);
        })
    }
  }

    // функция удаления фильмов
  const handleDeleteMovie = (movie) => {
    setIsLoading(true);
    mainApi.deleteMovie(movie._id)
      .then((card) => {
        const updatedSavedMovies = savedFilms.filter(item => card._id !== item._id);
        localStorage.setItem('savedMovies', updatedSavedMovies);
        setSavedFilms(updatedSavedMovies);
      })
      .catch(error => {
        setPopupMessage(`При удалении произошла ошибка. ${error}`);
        setIsPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

    // обновление данных пользователя
  const updateUser = (newUserInfo) => {
    const token = localStorage.getItem('token');
    setIsLoading(true);
    mainApi.updateUserInfo(newUserInfo, token)
      .then((data) => {
        setCurrentUser(data);
        setPopupMessage('Данные успешно обновлены');
        setIsPopupOpen(true);
      })
      .catch(error => {
        setPopupMessage(`При обновлении произошла ошибка. ${error}`);
        setIsPopupOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

    // выход из системы
  const signOut = () => {
    localStorage.clear();
    setCurrentUser({});
    setPopupMessage('');
    setSavedFilms([]);
    setIsLoggedIn(false);
    history.push('/');
    console.log(localStorage)
  };
  console.log()

  const handleTokenCheck = (token) => {
    if (token) {
      mainApi.getContent(token)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            setCurrentUser(data)
          }
        })
        .catch((error) => console.log(error));
      mainApi.getSavedMovies(token)
        .then((movies) => {
          setSavedFilms(movies)
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={isLoggedIn}/>
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={isLoggedIn}
            isLoading={isLoading}
            setPopupMessage={setPopupMessage}
            setIsPopupOpen={setIsPopupOpen}
            savedFilms={savedFilms}
            setIsLoading={setIsLoading}
            onSave={handleSaveFilms}
            onDelete={handleDeleteMovie}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={isLoggedIn}
            savedFilms={savedFilms}
            isLoading={isLoading}
            onDelete={handleDeleteMovie}
            setPopupMessage={setPopupMessage}
            setIsPopupOpen={setIsPopupOpen}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={isLoggedIn}
            updateUser={updateUser}
            signOut={signOut}
            setPopupMessage={setPopupMessage}
            setIsPopupOpen={setIsPopupOpen}
          />
          <Route path="/signin">
            {isLoggedIn ?
              <Redirect to= '/'/>
            :
              <Login login={handleAuthorization}/>
            }
          </Route>
          <Route path="/signup">
            {isLoggedIn ?
              <Redirect to= '/'/>
            :
              <Register register={handleRegistration}/>
            }
          </Route>
          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
        <PopupMessage
          isOpen={isPopupOpen}
          onClose={closePopup}
          message={popupMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
