import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    movie: {},
    genres: [],
    movieByGenres: [],
    movieByName: [],
    movieById: {},
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (page, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page)
            const {results} = data
            return results

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk(
    'movieSlice/getById',
    async (id, thunkAPI) =>{
        try {
            const {data} = await movieService.getMovieById(id)
            return data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getGenres = createAsyncThunk(
    'moviesSlice/getGenres',
    async (_, thunkAPI) =>{
        try {
            const {data} = await movieService.getGenres
            const {genres} = data
            return genres
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async (genre_key, thunkAPI) =>{
        try {
            const {data} = await movieService.getMoviesByGenre(genre_key)
            const {results} = data
            return {results}

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)

const getMoviesByName = createAsyncThunk(
    'movieSlice/getMoviesByName',
    async (name, thunkAPI) => {
        try {
            const {data} = await movieService.getMovieByName(name)
            const {results} = data
            return results

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getMoviesByGenre.fulfilled, (state,action) => {
                state.movieByGenres = action.payload
            })
            .addCase(getMoviesByName.fulfilled, (state, action) => {
                state.movieByName = action.payload
            })
})


const {reducer: movieReducer} = movieSlice;

const movieAction = {
    getAll,
    getById,
    getGenres,
    getMoviesByGenre,
    getMoviesByName
}

export {
    movieReducer,
    movieAction
}