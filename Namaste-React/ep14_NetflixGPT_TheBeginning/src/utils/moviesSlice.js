import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "nowPlaying",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMovies : null,
    },
    reducers : {
        addNowPlayingMovie : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovie : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovie : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovie : (state, action) => {
            state.upcomingMovies = action.payload;
        }
        

    }

})

export const {addNowPlayingMovie, addTrailerVideo, addPopularMovie, addTopRatedMovie, addUpcomingMovie} = moviesSlice.actions;
export default moviesSlice.reducer;