import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";

import {movieAction} from "../../redux";
import MovieListCard from "../MovieListCard/MovieListCard";
import './MovieListStyle.css'


const MoviesList = () => {
    const location = useLocation();
    const page = new URLSearchParams(location.search).get('page');

    const {movies} = useSelector(state => state.movie)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getAll(page))

    }, [dispatch, page])


    return (
        <div>
            <div className='list_card'>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>

            <div className='pagination'>
                <Link to={{pathname: '/movies', search: `?page=${+page - 1}`}}>
                    <button disabled={+page <= 1}>Back</button>
                </Link>

                <div className='page'>page {page}</div>

                <Link to={{pathname: '/movies', search: `?page=${+page + 1}`}}>
                    <button disabled={+page >= 37245}>Next</button>
                </Link>
            </div>
        </div>
    );
};
export default MoviesList;