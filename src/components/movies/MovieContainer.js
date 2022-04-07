

function MovieContainer() {

    return (
        <div className='movie-container-wrapper'>
            <div className='movie-image-wrapper'>
                <img alt='no image'></img>
            </div>
            <div className='movie-details'>
                <h2>Movie title</h2>
                <ul>
                    <li className='movie-agenres'></li>
                    <li className='movie-duration'></li>
                </ul>
                <p>Movie resume Movie resume Movie resume Movie resume Movie resume Movie resume
                    Movie resume Movie resume Movie resume Movie resume Movie resume Movie resume
                    Movie resume Movie resume Movie resume Movie resume Movie resume Movie resume
                    Movie resume Movie resume Movie resume Movie resume Movie resume Movie resume
                </p>
                <a>Visit official website</a>
            </div>
            <button>Add to favorites/remove from favorits</button>
        </div>
    )
}

export default MovieContainer