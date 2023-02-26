import React from 'react';
import ReactStarRatings from "react-star-ratings";
import {Link} from "react-router-dom";

import './MovieListCardStyle.css'

const MovieListCard = ({movie}) => {

    const {id, original_title, vote_average, poster_path} = movie

    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <div className='card'>
            <img src={img_url} alt={''}/>
            <div className='name'>Name: {original_title}</div>
            <div className='rating'>
                <ReactStarRatings
                    rating={vote_average}
                    numberOfStars={10}
                    starDimension="15px"
                    starSpacing="2px"
                    starRatedColor="blue"
                />
                <div>{vote_average}</div>
            </div>
            <Link to={{ pathname: '/movie_info', search: `?id=${id}` }}>Details</Link>
        </div>
    );
};

export default MovieListCard;