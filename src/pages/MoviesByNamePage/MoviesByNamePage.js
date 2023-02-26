import React from 'react';

import MovieByName from "../../components/MovieByName/MovieByName";
import './MoviesByNameStyle.css'

const MoviesByNamePage = () => {
    return (
        <div className='list_movie_by_id'>
            <MovieByName/>
        </div>
    );
};

export default MoviesByNamePage;