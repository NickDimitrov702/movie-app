import MovieContainer from "../movies/MovieContainer"
import SearchBar from "../searchbar/SearchBar"
import style from './searchPage.module.css'
import { useEffect, useState } from "react"

function SearchPage() {

    let baseUrl = 'https://api.tvmaze.com/search/shows?q=';
    const [endpoints, setEndPoint] = useState();
    let endpoint;
    let searchReasult;
    const [data, setData] = useState([])
    const [updateBaseUrl, setBaseUrl] = useState();
    const [searchInput, setSearchInput] = useState();

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
    }

    function onClick(e) {
        e.preventDefault()
        endpoint = document.getElementById('searchInput').value
        searchReasult = `https://api.tvmaze.com/search/shows?q=${endpoint}`
        console.log(endpoint)
        localStorage.setItem(baseUrl, endpoint)
        try {
            fetch(searchReasult)
                .then(data => data.json())
                .then(data => setData(data))
        } catch {
            console.log('dwadawdawdawd')
        }



        console.log(data)
    }

    useEffect(() => {

        setData(data)
        try {
            fetch(baseUrl)
                .then(data => data.json())
                .then(data => setData(data))
        } catch {
            console.log('dwadawdawdawd')
        }
    }, [])



    // console.log(data.map(items => console.log(items.show)))

    return (
        <div className={style.searchPageWrapper}>
            <SearchBar></SearchBar>
            <div className={style.inputWrapper}>
                <input className={style.searchInput} id='searchInput' type='text' placeholder='Search by movie title' onChange={(e) => searchItems(e.target.value)}  ></input>
                <button onClick={onClick} className={style.searchButton}>Search</button>
            </div>
            {data.map(items =>
                <MovieContainer id={items.show.id} name={items.show.name} image={items.show.image} {...items} />
            )}

        </div>
    )
}

export default SearchPage