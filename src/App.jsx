import { useEffect, useState, useContext } from 'react'
import GlobalContexts from './contexts/GlobalContexts'
import './App.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import AppHeader from './components/AppHeader'
import flags from './data/flags'
import AppVoteStars from './components/AppVoteStars'
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
        const film = data.results
        setAllFindMovies(data.results)
        fetch(urlTV)
          .then(resp => (resp.json()))
          .then(data => {
            console.log(data);
            const serie = data.results
            setAllFindTV(data.results)
            setAllResult(film.concat(serie))
          })
      })
  }

  console.log(allResult);

  useEffect(fetchDataMovies, [findMovie])

  return (
    <>
      <GlobalContexts.Provider value={{ handleSearch, searchMovie, setSearchMovie }}>

        <AppHeader />
        <main>

          <div className="container">
            <div className="row">


              {allResult.map(movie =>
                <div className="col-3">

                  <div key={movie.id} className="card">
                    <div className="cardImg">

                      {!movie.poste_path ? <img src={`${APIurlImgs}${movie.poster_path}`} alt="" /> : <div className='noFound'>no Found</div>}
                    </div>
                    <div className="cardBody">
                      {movie.title ? <div className='title'> <strong>Title:</strong> {movie.title}</div> : <div className='title'><strong>Title:</strong> {movie.name}</div>}

                      {movie.original_title ? <div className='originalN'><strong>Original movie Title: </strong> {movie.original_title}</div> : <div className='originalN'> <strong strong > Original TV name:  </strong > {movie.original_name}</ div>}
                      <div className='overview'><strong>Overviw: </strong>{movie.overview}</div>
                      <div className='language'>
                        language: {flags.includes(movie.original_language) ? <img src={`http://localhost:5173/imgs/flags/${movie.original_language}.png`} alt="" /> :
                          <><img src={`http://localhost:5173/imgs/flags/xx.png`} alt="" /><p>{movie.original_language}</p></>
                        }
                      </div>
                      <div className="stars">
                        <AppVoteStars vote={movie.vote_average} />

                      </div>
                    </div>


                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </GlobalContexts.Provider>

    </>
  )
}

export default App



