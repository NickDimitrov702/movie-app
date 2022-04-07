import MovieContainer from "../movies/MovieContainer"
import SearchBar from "../searchbar/SearchBar"


function MovieDetails() {

    return (
        <div href='/movie-details'>
            <SearchBar></SearchBar>
            <MovieContainer></MovieContainer>
            <div className='your-review-wrapper'>
                <h2>Your Review</h2>
                <p>STARS RATING</p>
            </div>
            <textarea value='Your private notes and comments about the movie...'>

            </textarea>
        </div>
    )
}


export default MovieDetails