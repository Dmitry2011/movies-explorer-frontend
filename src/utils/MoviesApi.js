export const movieApiUrl = 'https://api.nomoreparties.co/beatfilm-movies'

class MoviesApi {
  constructor(movieUrl) {
    this._movieUrl = movieUrl;
  }

    // Метод проверки ответ от сервера
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что то пошло не так. Ошибка: ${res.status}`);
  }

    // Метод получения фильмов с сервера
  getMovies() {
    return fetch(this._movieUrl)
      .then(res => this._handleResponse(res));
  }
}

const moviesApi = new MoviesApi(movieApiUrl);

export default moviesApi;
