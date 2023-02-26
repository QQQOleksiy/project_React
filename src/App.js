import {Route, Routes} from "react-router-dom";

import MainLayouts from "./layouts/MainLayouts";
import MoviesDetailsPage from "./pages/MoviesDetailsPage/MoviesDetailsPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import HomePage from "./pages/HomePage/HomePage";
import GenresPage from "./pages/GenresPage/GenresPage";
import MovieByGenre from "./components/MovieByGenre/MovieByGenre";
import MoviesByNamePage from "./pages/MoviesByNamePage/MoviesByNamePage";
import './theme-light.css';
import './theme-dark.css';


const App = () => {
    const theme = localStorage.getItem('theme')
    console.log(theme);

    return (
        <div className={theme}>
            <Routes>
                <Route path={'/'} element={<MainLayouts/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/movies'} element={<MoviesPage/>}/>
                    <Route path={'/movie_info'} element={<MoviesDetailsPage/>}/>
                    <Route path={'/movies_by_name'} element={<MoviesByNamePage/>}/>
                    <Route path={'/genres'} element={<GenresPage/>}>
                        <Route path={':genre_key'} element={<MovieByGenre/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
