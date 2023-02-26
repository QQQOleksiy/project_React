import React from 'react';
import {Outlet} from "react-router-dom";

import GenresList from "../../components/GenresList/GenresList";
import './GenresPageStyle.css'


const GenresPage = () => {

    return (
        <div className='main_'>
            <div className='genres_list'>
                <GenresList/>
            </div>

            <div className='card_list'>
                <Outlet/>
            </div>
        </div>
    );
};

export default GenresPage;