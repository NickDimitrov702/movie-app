import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import style from './movieDetails.module.css';

function MovieContainer({
    id,
    name,
    image,
    runtime,
    genres,
    links,
    summary,
    premiered
}) {

    let [images, setImage] = useState('')
    let [summarys, setSummary] = useState('')
    let [gener, setGener] = useState('')

    console.log(links)

    useEffect(() => {

        if (image) {
            setImage(image)
        }

        if (summary) {
            setSummary(summary)
        }

        if (genres) {
            setGener(genres)
        }


        // {genres.map(genr => { return `${genr}, ` })}

    }, [image])

    return (
        <div className={style.movieDetailsWrapper}>
            <div className={style.movieImageWrapper}>
                <img src={images.medium} alt='no image' />
            </div>
            <div className={style.movieDetails}>
                <Link to={{
                    pathname: '/movie-details',
                    state: name
                }}><h2>{name}  ({` ${premiered}`})</h2></Link>
                <ul className={style.movieSpecs}>
                    <li className='movie-genres'>{`${gener}`}</li>
                    <li className='movie-duration'>| {runtime} minutes</li>
                </ul>
                <div className={style.summary}>
                    {summarys.split('<p>').join('').split('</p>').join('').split('<b>').join('').split('</b>')}
                </div>
                {/* <p className={style.movieReview}>{summary.split()}
                </p> */}
                <a href='https://www.tvmaze.com/api' target='_blank' className={style.movieDetailsLink}>Visit official website</a>
                <button id={style.button}>Add to favorites/remove from favorits</button>
            </div>

        </div>
    )
}

export default MovieContainer