  // Перевод минут в формат "час, минут"
const convertTime = (time) => {
  const minutes = time % 60;
  const hours = (time - minutes) / 60;
  if (hours === 0) {
    return `${minutes}м`;
  } else if (minutes === 0) {
    return `${hours}ч`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
};

  // возвращаем только фильмы с временем меньше 40 мин
function filterFilmsShort(movies) {
  return movies.filter(movies => movies.duration < 40);
}

  // ищем фильмов по входному значению
function searchFilms(movies, userQuery, shortMoviesCheckbox) {
  const searchValue = movies.filter((movie) => {
      // переводим название RU/EN в нижний регистр, убираем пробелы в начале и в конце строки
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
      // переводим поисковое значение в нижний регистр, убираем пробелы в начале и в конце строки
    const userMovie = userQuery.toLowerCase().trim();
      // поиск фильма
    return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
  });

  if (shortMoviesCheckbox) {
      //возвращаем только короткометражки
    return filterFilmsShort(searchValue);
  } else {
      // возвращаем все фильмы
    return searchValue;
  }
}

  // проверяем был ли фильм сохранен
const checkFilmsSaved = (moviesList, movie) => {
  return moviesList.find((item) => {
    return item.movieId === (movie.id || movie.movieId);
  });
}

export  {convertTime, filterFilmsShort, searchFilms, checkFilmsSaved}
