import { useEffect, useState } from "react"
import MovieContainer from "../movies/MovieContainer"
import SearchBar from "../searchbar/SearchBar"
import style from './movieDetailsPage.module.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'


function MovieDetails({
    name,
}) {
    
    return (
        <div className={style.movieDetailsPageWrapper} href='/movie-details'>
            <SearchBar></SearchBar>
            <Routes>
                <Route path='/*' element={<MovieContainer />} ></Route>
            </Routes>
            <div className={style.ratingsWrapper}>
                <h2>Your Review</h2>
                <p>STARS RATING</p>
                <textarea className={style.textArea} value='Your private notes and comments about the movie...'>

                </textarea>
            </div>
        </div>
    )
}


export default MovieDetails