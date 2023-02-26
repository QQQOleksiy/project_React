import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux";
import MovieListCard from "../MovieListCard/MovieListCard";
import './MovieByGenre.css'

const MovieByGenre = () => {
    const key = useParams()

    const {movieByGenres} = useSelector(state => state.movie)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieAction.getMoviesByGenre(key.genre_key))
    }, [dispatch, key])

    const {results} = movieByGenres
    if (results) {
        return (
            <div className='card_list_'>
                {results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
        );
    }
}
export default MovieByGenre;