import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className="header">
            <ThemeSwitcher/>
            <Link to={{ pathname: '/movies', search: '?page=1' }}>Movies</Link>
            <Link to="/genres">Genres</Link>

            <div>
                <input type="text" value={searchText} placeholder="Name movie..." onChange={(event) => setSearchText(event.target.value)} />
                <Link to={{ pathname: '/movies_by_name', search: `?name=${searchText}` }}>
                    <button>search</button>
                </Link>
            </div>

            <div>
                <div className="user">U</div>
            </div>
        </div>
    );
};

export default Header;