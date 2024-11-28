import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import './App.css'
const APIkey = 'bf3833151ec0112ceeff966557fa120e'
const APIurl = 'https://api.themoviedb.org/3/search/movie?'

// const MovieSearch = () => {

//   const [search, setSearch] = useState('')
//   const {movies, fetchMovies} =useContext(GlobalContext)
//    const handleSubmit = (e) => {
//     e.preventDefault(e)
//     fetchMovies(search)
//     setSearch('')

//    }
// }




function App() {





  const [searchMovie, setSearchMovie] = useState('')
  const [findMovie, setFindMovie] = useState('')
  const [allFind, setAllFind] = useState([])
  const url = `${APIurl}api_key=${APIkey}&query=${findMovie}`
  function handleSearch(e) {
    e.preventDefault()
    setFindMovie(searchMovie)
  }


  function fetchData(url = `${APIurl}api_key=${APIkey}&query=${findMovie}`) {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results);
        setAllFind(data.results)

      })
  }
  useEffect(fetchData, [findMovie])


  return (
    <>
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
      {allFind.map(movie =>

        <div key={movie.id} className="card">

          <h3>{movie.title}</h3>
          <p>{movie.original_title}</p>
          <p>{movie.original_language}</p>
          <p>{movie.vote_average}</p>

        </div>
      )}

    </>
  )
}

export default App
