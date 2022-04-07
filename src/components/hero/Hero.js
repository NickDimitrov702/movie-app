import {Link} from 'react-router-dom'


function Hero() {

    return (
        <div>
            <h1>Heading</h1>
            <p>Welcome to movie library, here you can find your favourite movies, their ratings
                and some spicy reviews.
            </p>
            <nav>
                <ul>
                    {/* replace with react-router-links */}
                    <li><Link to='/'>Home page</Link></li>
                    <li><Link to='/search'>Search page</Link></li>
                    <li><Link to='/movie-details'>Movie details</Link></li>
                    {/* replace with react-router-links */}
                </ul>
            </nav>
        </div>
    )
}

export default Hero