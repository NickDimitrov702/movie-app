import style from './Favorite.module.css'

function Favorites() {

    return( 
        <div className={style.favoritesWrapper}>
            <h2>Your Favorites</h2>
            <div className='carosell-wrapper'>
                <div className='movie-template'>
                    <div className={style.movieImage}>

                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Favorites