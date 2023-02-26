import React from 'react';
import {Link} from "react-router-dom";

import './MovieCardByIdStyle.css'

const MovieCardById = ({movie}) => {

    const {id, name} = movie

    return (
        <div className='movie_link'>
            <Link to={{ pathname: '/movie_info', search: `?id=${id}`}}>{name}</Link>
        </div>
    );
};

export default MovieCardById;