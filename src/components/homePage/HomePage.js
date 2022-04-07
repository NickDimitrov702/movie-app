import SearchBar from "../searchbar/SearchBar"
import Hero from "../hero/Hero"
import Favorites from "../favorites/Favorites"
function HomePage() {

    return (
        <div href='/home-page'>
            <SearchBar></SearchBar>
            <Hero></Hero>
            <Favorites></Favorites>
        </div>
    )
}

export default HomePage