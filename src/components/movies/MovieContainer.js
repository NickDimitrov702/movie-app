import style from './movieDetails.module.css';

function MovieContainer({
    id,
    name,
    image
}) {

    console.log(image)
    return (
        <div className={style.movieDetailsWrapper}>
            <div className={style.movieImageWrapper}>
                <img src={image} alt='no image'/>
            </div>
            <div className={style.movieDetails}>
                <h2>{name}</h2>
                <ul className={style.movieSpecs}>
                    <li className='movie-genres'>Action</li>
                    <li className='movie-duration'>160</li>
                </ul>
                <p className={style.movieReview}>Movie resume Movie resume Movie resume Movie resume Movie resume Movie resume
                    Movie resume Movie resume Movie resume Movie resume Movie resume Movie resume
                    Movie resume Movie resume Movie resume Movie resume Movie resume Movie resume
                    Movie resume Movie resume Movie resume Movie resume Movie resume Movie resume
                </p>
                <a href='https://www.tvmaze.com/api' target='_blank' className={style.movieDetailsLink}>Visit official website</a>
                <button id={style.button}>Add to favorites/remove from favorits</button>
            </div>

        </div>
    )
}

export default MovieContainer