const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    movie: (page) => `/discover/movie?page=${page}`,
    genres: '/genre/movie/list',
    searchMovie:(name) => `/search/keyword?query=${name}`,
    movieById: (id) => `/movie/${id}`,
    moviesByGenres: (genre_key) => `/discover/movie?with_genres=${genre_key}`
}

export {
    baseURL,
    urls
}