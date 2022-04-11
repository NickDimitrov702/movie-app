import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar/SearchBar.js'
import Hero from './components/hero/Hero';
import Favorites from './components/favorites/Favorites';
import HomePage from './components/homePage/HomePage';
import SearchPage from './components/searchPage/SearchPage';
import MovieDetails from './components/movie-details/MovieDetailsPage';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { DataProvider } from './components/contextProvider/contextProvider'

function App() {

  return (
    <div className="App">

      <DataProvider>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='/movie-details' element={<MovieDetails />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
