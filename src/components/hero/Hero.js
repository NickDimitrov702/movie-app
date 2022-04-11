import { Link } from 'react-router-dom'
import style from './Hero.module.css'
import heroBackground from '../../resources/heroBackground.jpg'
function Hero() {

    return (
        <div className={style.heroWrapper}>
            <img className={style.heroImage} src={heroBackground}/>
            <div className={style.headerWrapper}>
                <h1>Heading</h1>
                <p>Welcome to movie library, here you can find your favourite movies, their ratings
                    and some spicy reviews.
                </p>
            </div>
            <div className={style.navBarWrapper}>
                <ul className={style.navBar}>
                    <li><Link to='/'>Home page</Link></li>
                    <li><Link to='/search'>Search page</Link></li>
                    <li><Link to='/movie-details'>Movie details</Link></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Hero