const token = localStorage.getItem("token");

class MainApi {
  constructor(config) {
  this._baseUrl = config.baseUrl;
  this._token = config.headers.authorization;
  this._headers = config.headers;
  }

    // метод проверки ответ от сервера
  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}, ${res.statusText}.`);
  }

    // запрос для регистрации
  register = async ({ name, email, password }) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    }).then((res) => this._handleResponse(res));
  };

    // запрос для авторизации
  authorize = async ({ email, password }) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._handleResponse(res));
  };

    // метод получения данных о пользователе с сервера
  getContent = async () => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    }).then((res) => this._handleResponse(res));
  };

    // метод обновления данных о пользователе на сервера
  updateUserInfo = async (data) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => this._handleResponse(res));
  };

    // метод получения сохраненых фильмов с сервера
  getSavedMovies = async () => {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    }).then((res) => this._handleResponse(res));
  };

    // метод сохранения фильма на сервер
  saveMovie = async (movie) => {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: 'https://api.nomoreparties.co/' + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co/' + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU || movie.nameEN,
        nameEN: movie.nameEN || movie.nameRU,
      }),
    }).then((res) => this._handleResponse(res));
  };

    // метод удаления фильма с сервера
  deleteMovie = async (id) => {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    }).then((res) => this._handleResponse(res));
  };

    // Метод принимает токен и подставляет его в заголовок объекта api
  getToken = (token) => {
    this._token =  `Bearer ${token}`
  }

  // запрос для проверки валидности токена
  getData = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(data => data)
    .then((res) => this._handleResponse(res));
  }
}

const mainApi = new MainApi({
  baseUrl: "https://dmitrys-movies-api.nomorepartiesxyz.ru",
  headers: {
    Accept: 'application/json',
    authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export default mainApi;
