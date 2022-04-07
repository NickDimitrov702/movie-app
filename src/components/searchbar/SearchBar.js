import { Link } from 'react-router-dom'
import style from './SearchBar.module.css'

function SearchBar() {

    return (
        <div className={style.searchBarWrapper}>
            <Link className={style.logo} to='/'>My Movie Collection</Link>
            <div className={style.inputWrapper}>
                <input className={style.searchInput} type='text' placeholder='Search by movie title'></input>
                <button id={style.searchButton}>Search</button>
            </div>
            
        </div>


    )
}

export default SearchBar