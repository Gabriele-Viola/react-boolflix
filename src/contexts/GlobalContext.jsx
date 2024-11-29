import { createContext, useContext, useState } from "react";
const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const [searchMovie, setSearchMovie] = useState('')
    const APIkey = import.meta.env.VITE_API_KEY
    const APIurlImgs = 'https://image.tmdb.org/t/p/w342'
    const APIurlMovie = 'https://api.themoviedb.org/3/search/movie?'
    const APIurlTV = 'https://api.themoviedb.org/3/search/tv?'
    const URL_TV = `${APIurlTV}api_key=${APIkey}&query=${searchMovie}`
    const URL_MOVIE = `${APIurlMovie}api_key=${APIkey}&query=${searchMovie}`
    const [allFindTV, setAllFindTV] = useState([])
    const [allFindMovies, setAllFindMovies] = useState([])
    const [allResult, setAllResult] = useState([])

    function handleSearch(e) {
        e.preventDefault()

        fetch(`${URL_MOVIE}api_key=${APIkey}&query=${searchMovie}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.results);
                const film = data.results
                setAllFindMovies(data.results)
                fetch(`${URL_TV}api_key = ${APIkey} & query=${searchMovie}`)
                    .then(resp => (resp.json()))
                    .then(data => {
                        console.log(data);
                        const serie = data.results
                        setAllFindTV(data.results)
                        setAllResult(film.concat(serie))
                    })
            })

    }

    const values = {
        APIurlImgs,
        URL_TV,
        URL_MOVIE,
        handleSearch,
        allResult,
        setAllResult,
        allFindMovies,
        setAllFindMovies,
        allFindTV,
        setAllFindTV, searchMovie, setSearchMovie,

    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )


}
function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalContextProvider, useGlobalContext }
// export default GlobalContexts