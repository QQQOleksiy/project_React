import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ReactStarRatings from "react-star-ratings";

import {movieAction} from "../../redux";
import './MovieInfoStyle.css'

const MovieInfo = () => {
    const location = useLocation();
    const idMovie = new URLSearchParams(location.search).get('id');

    const {movie} = useSelector(state => state.movie)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getById(idMovie))

    }, [dispatch])


    const {original_language, original_title, overview, popularity, vote_average, poster_path, release_date} = movie

    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <div className='container'>
            <div className='details'>
                <div className='image'>
                    <img src={img_url} alt={original_title}/>
                </div>
                <div className='all_info'>
                    <div>Language: {original_language}</div>
                    <div>Release_date: {release_date}</div>
                    <div>Name: {original_title}</div>
                    <div>Overview: {overview}</div>
                    <div>Popularity: {popularity}</div>
                    <div>Rating: {vote_average}</div>
                    <ReactStarRatings
                        rating={vote_average}
                        numberOfStars={10}
                        starDimension="20px"
                        starSpacing="2px"
                        starRatedColor="blue"
                        changeRating={newRating => console.log(newRating)}
                    />
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;