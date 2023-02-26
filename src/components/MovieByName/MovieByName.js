import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux";
import MovieCardById from "../MovieCardById/MovieCardById";
import './MovieByNameStyle.css'

const MovieByName = () => {
    const location = useLocation();
    const name = new URLSearchParams(location.search).get('name');

    const {movieByName} = useSelector(state => state.movie)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieAction.getMoviesByName(name))
    }, [dispatch, name])

if (movieByName.length !== 0){
    return (
        <div>
            {movieByName.map(movie => <MovieCardById key={movie.id} movie={movie}/>)}
        </div>
    )
}else if (movieByName.length === 0){
    return (
        <div className='not_found'>
            <h1>Not Found Movies</h1>
        </div>
    )
}

};

export default MovieByName;