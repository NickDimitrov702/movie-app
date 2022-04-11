import MovieContainer from "../movies/MovieContainer"
import SearchBar from "../searchbar/SearchBar"
import style from './searchPage.module.css'
import { useEffect, useState } from "react"
import { useDataFetch } from '../contextProvider/contextProvider'
import { useNavigate } from "react-router-dom"

function SearchPage() {

    let endpoint;
    let searchReasult;
    const [searchData1, setSearchData] = useState([])
    const [baseData, setData] = useState([])
    const [isLoaded, setIsloaded] = useState(true);
    const { data } = useDataFetch([])
    
    async function onClick(e) {

        e.preventDefault()
        endpoint = document.getElementById('searchInput').value
        searchReasult = `https://api.tvmaze.com/search/shows?q=${endpoint}`
        console.log(endpoint)



        try {
            await fetch(searchReasult)
                .then(data => data.json())
                .then(data => setSearchData(data))
                

        } catch {
            console.log('Could not pull data')
        } finally {

            setIsloaded(false)
        }

    }

    useEffect(() => {
    
        setData(searchData1)

    }, [searchData1])

    console.log(data)
    // console.log(data.map(items => console.log(items.show)))
    return (
        <div className={style.searchPageWrapper}>
            <SearchBar></SearchBar>
            <div className={style.inputWrapper}>
                <input className={style.searchInput} id='searchInput' type='text' placeholder='Search by movie title'></input>
                <button onClick={onClick} className={style.searchButton}>Search</button>
            </div>
            {!isLoaded ? <div>{searchData1.map(items => <MovieContainer id={items.show.id} name={items.show.name} image={items.show.image} links={items.show._links} {...items.show} />)} </div>
                : <div>{baseData.map(items =>
                    <MovieContainer id={items.show.id} name={items.show.name} image={items.show.image} links={items.show._links} {...items.show} />
                )}</div>}
        </div>
    )
}

export default SearchPage