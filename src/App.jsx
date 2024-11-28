import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import './App.css'
import AppHeader from './components/AppHeader'
import flags from './data/flags'
const APIkey = 'bf3833151ec0112ceeff966557fa120e'
const APIurlMovie = 'https://api.themoviedb.org/3/search/movie?'
const APIurlTV = 'https://api.themoviedb.org/3/search/tv?'
const APIurlImgs = 'https://image.tmdb.org/t/p/w342'


function App() {

  const [searchMovie, setSearchMovie] = useState('')
  const [findMovie, setFindMovie] = useState('')
  const [allFindMovies, setAllFindMovies] = useState([])
  const [allFindTV, setAllFindTV] = useState([])
  const [allResult, setAllResult] = useState([])

  function handleSearch(e) {
    e.preventDefault()
    setFindMovie(searchMovie)
  }


  function fetchDataMovies(urlMovies = `${APIurlMovie}api_key=${APIkey}&query=${findMovie}`, urlTV = `${APIurlTV}api_key=${APIkey}&query=${findMovie}`) {
    fetch(urlMovies)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results);
        fetch
        setAllFindMovies(data.results)
        fetch(urlTV)
          .then(resp => (resp.json()))
          .then(data => {
            console.log(data);
            setAllFindTV(data.results)
          })
        setAllResult(allFindMovies.concat(allFindTV))
      })
  }

  console.log(allResult);


  useEffect(fetchDataMovies, [findMovie])



  return (
    <>
      <GlobalContext.Provider value={{ fetchDataMovies, setAllFindMovies, allFindMovies }}>
        {/* <AppHeader /> */}
        <header>
          <h1>NettoFlixxo</h1>
          <form onSubmit={handleSearch}>
            <div className="searchBar"
              name='searchBox'
              id='searchBox'
              placeholder='Search Movies'
              value={searchMovie}
              onChange={e => setSearchMovie(e.target.value)}>
              <input type="search" />
              <button type='submit' >invia</button>
            </div>
          </form>
        </header>
        {/* {allFindMovies.map(movie =>

          <div key={movie.id} className="card">

            <h3>{movie.title}</h3>
            <p>originalTitle: {movie.original_title}</p>
            <div>
              language: {flags.includes(movie.original_language) ? <img src={`http://localhost:5173/imgs/flags/${movie.original_language}.png`} alt="" /> :
                <><img src={`http://localhost:5173/imgs/flags/xx.png`} alt="" /><p>{movie.original_language}</p></>
              }
            </div>

            <p>Vote: {movie.vote_average}</p>

          </div>
        )}
        {allFindTV.map(movie =>

          <div key={movie.id} className="card">

            <h3>{movie.title}</h3>
            <p>originalTitle: {movie.original_title}</p>
            <div>
              language: {flags.includes(movie.original_language) ? <img src={`http://localhost:5173/imgs/flags/${movie.original_language}.png`} alt="" /> :
                <><img src={`http://localhost:5173/imgs/flags/xx.png`} alt="" /><p>{movie.original_language}</p></>
              }
            </div>

            <p>Vote: {movie.vote_average}</p>

          </div>
        )} */}
        {allResult.map(movie =>

          <div key={movie.id} className="card">

            {movie.title ? <h3>{movie.title}</h3> : <h3>{movie.name}</h3>}
            <img src={`${APIurlImgs}${movie.poster_path}`} alt="" />

            {movie.original_title ? <p>original movie Title: {movie.original_title}</p> : <p>original TV name: {movie.original_name}</p>}
            <div>
              language: {flags.includes(movie.original_language) ? <img src={`http://localhost:5173/imgs/flags/${movie.original_language}.png`} alt="" /> :
                <><img src={`http://localhost:5173/imgs/flags/xx.png`} alt="" /><p>{movie.original_language}</p></>
              }
            </div>

            <p>Vote: {movie.vote_average}</p>

          </div>
        )}
      </GlobalContext.Provider>

    </>
  )
}

export default App
