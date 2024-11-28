import { useEffect, useState } from 'react'

import './App.css'
const APIkey = 'bf3833151ec0112ceeff966557fa120e'
const APIurl = 'https://api.themoviedb.org/3/search/movie?'
function App() {
  const [searchMovie, setSearchMovie] = useState('')
  const [findMovie, setFindMovie] = useState('')
  const [allFind, setAllFind] = useState([])
  const url = `${APIurl}api_key=${APIkey}&query=${findMovie}`
  function handleSearch(e) {
    e.preventDefault()
    setFindMovie(searchMovie)
  }

  // console.log(url);

  function fetchData(url = `${APIurl}api_key=${APIkey}&query=${findMovie}`) {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results);
        setAllFind(data.results)

      })
  }
  useEffect(fetchData, [findMovie])

  // function fetchData(url = `${api_server}${api_endpoint}`) {
  //   fetch(url)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       setRicette(data.data)
  //     })
  // }

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
        {allFind.map(movie =>

          <div key={movie.id} className="card">

            <h3>{movie.title}</h3>
            <p>{movie.original_title}</p>
            <p>{movie.original_language}</p>
            <p>{movie.vote_average}</p>

          </div>
        )}

      </header>
    </>
  )
}

export default App
