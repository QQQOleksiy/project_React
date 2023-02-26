import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getAll: (page) => apiService.get(urls.movie(page)),
    getGenres: apiService.get(urls.genres),
    getMovieByName: (name) => apiService.get(urls.searchMovie(name)),
    getMovieById: (id) => apiService.get(urls.movieById(id)),
    getMoviesByGenre: (genre_key) => apiService.get(urls.moviesByGenres(genre_key))
}

export {
    movieService
}