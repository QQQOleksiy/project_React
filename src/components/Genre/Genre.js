import React from 'react';
import {Link} from "react-router-dom";

import './GenreStyle.css'

const Genre = ({genre}) => {
    const {id, name} = genre

    return (
        <div className='genres_link'>
            <Link to={`${id}`}>{name}</Link>
        </div>
    );
};

export default Genre;