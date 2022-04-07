import MovieContainer from "../movies/MovieContainer"
import SearchBar from "../searchbar/SearchBar"


function SearchPage() {

    return(
        <div>
            <SearchBar></SearchBar>
            <MovieContainer></MovieContainer>
        </div>
    )
}

export default SearchPage