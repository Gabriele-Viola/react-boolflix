import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import './App.css'
import AppHeader from './components/AppHeader'
import flags from './data/flags'
const APIkey = 'bf3833151ec0112ceeff966557fa120e'
const APIurlMovie = 'https://api.themoviedb.org/3/search/movie?'
const APIurlTV = 'https://api.themoviedb.org/3/search/tv?'


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

  function fetchAllData(APIurlMovie, APIurlTV) {

    function fetchDataMovies(url = `${APIurlMovie}api_key=${APIkey}&query=${findMovie}`) {
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          console.log(data.results);
          setAllFindMovies(data.results)

        })
    }
    function fetchDataTVs(url = `${APIurlTV}api_key=${APIkey}&query=${findMovie}`) {
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          console.log(data.results);
          setAllFindTV(data.results)

        })
    }
    setAllResult(allFindMovies.concat(allFindTV))
  }

  useEffect(fetchAllData, [findMovie])
  console.log(allResult);


  return (
    <>

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
      {allFindMovies.map(movie =>

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

    </>
  )
}

export default App
