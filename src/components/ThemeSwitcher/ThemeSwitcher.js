import React from 'react';


const ThemeSwitcher = () => {
    return (
        <div>
            <button onClick={() =>localStorage.setItem('theme','light')}>Light</button>
            <button onClick={() =>localStorage.setItem('theme','dark')}>Dark</button>
            <div>You need to refresh the page</div>
        </div>
    );
}

export default ThemeSwitcher;