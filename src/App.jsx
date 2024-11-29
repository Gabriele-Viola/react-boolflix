import nettoflixxo from '/imgs/nettoflixxo.png'
import { useEffect, useState, useContext } from 'react'
import { GlobalContextProvider, useGlobalContext } from "./contexts/GlobalContext"
import './App.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import AppHeader from './components/AppHeader'
import flags from './data/flags'
import AppVoteStars from './components/AppVoteStars'
const APIkey = import.meta.env.VITE_API_KEY
const APIurlMovie = 'https://api.themoviedb.org/3/search/movie?'
const APIurlTV = 'https://api.themoviedb.org/3/search/tv?'
const APIurlImgs = 'https://image.tmdb.org/t/p/w342'



// console.log(`${APIurlMovie}api_key=${APIkey}&query=${findMovie}`);

function App() {





  // const [searchMovie, setSearchMovie] = useState('')
  // const [allFindTV, setAllFindTV] = useState([])
  // const [allFindMovies, setAllFindMovies] = useState([])
  const [allResult, setAllResult] = useState([])
  // const URL_TV = `${APIurlTV}api_key=${APIkey}&query=${searchMovie}`
  // const URL_MOVIE = `${APIurlMovie}api_key=${APIkey}&query=${searchMovie}`

  // function handleSearch(e) {
  //   e.preventDefault()

  //   fetch(`${URL_MOVIE}api_key=${APIkey}&query=${searchMovie}`)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data.results);
  //       const film = data.results
  //       setAllFindMovies(data.results)
  //       fetch(`${URL_TV}api_key = ${APIkey} & query=${searchMovie}`)
  //         .then(resp => (resp.json()))
  //         .then(data => {
  //           console.log(data);
  //           const serie = data.results
  //           setAllFindTV(data.results)
  //           setAllResult(film.concat(serie))
  //         })
  //     })

  // }

  // console.log(allResult);

  // useEffect(fetchDataMovies, [findMovie])

  return (
    <>
      <GlobalContextProvider>


        <AppHeader />
        {/* <header>
          <div className="containerHeader">

            <div className="logo">
              <img src={nettoflixxo} alt="" />
            </div>
            <form className='formStyle' onSubmit={handleSearch}>
              <div className="searchBar">
                <input type="search" name='searchBox'
                  id='searchBox'
                  placeholder='Search Movies'
                  value={searchMovie}
                  onChange={e => setSearchMovie(e.target.value)} />
                <button type='submit' ><i className="bi bi-search"></i></button>
              </div>
            </form>
          </div>
        </header> */}
        <main>

          <div className="container">
            <div className="row">


              {allResult.map(movie =>
                <div key={movie.id} className="col-3">

                  <div key={movie.id} className="card">
                    <div className="cardImg">

                      {movie.poste_path ? <div className='noFound'>no Found</div> : <img src={`${APIurlImgs}${movie.poster_path}`} alt="" />}
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


      </GlobalContextProvider>
    </>
  )
}

export default App



