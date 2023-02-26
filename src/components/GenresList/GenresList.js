import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux";
import Genre from "../Genre/Genre";
import './GenreListStyle.css'

const GenresList = () => {
    const {genres} = useSelector(state => state.movie)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieAction.getGenres())

    }, [dispatch])


    return (
        <div className='genres_list'>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenresList;