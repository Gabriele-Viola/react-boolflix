import { createContext, useContext, useEffect, useState } from "react";
const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
    const [searchMovie, setSearchMovie] = useState('')
    const APIkey = import.meta.env.VITE_API_KEY
    const API_URL_IMG = 'https://image.tmdb.org/t/p/w342'
    const APIurlMovie = 'https://api.themoviedb.org/3/search/movie?'
    const APIurlTV = 'https://api.themoviedb.org/3/search/tv?'
    const API_URL_POPOLAR = 'https://api.themoviedb.org/3/movie/popular?'
    const URL_POPULAR = `${API_URL_POPOLAR}api_key=${APIkey}`
    const URL_TV = `${APIurlTV}api_key=${APIkey}&query=${searchMovie}`
    const URL_MOVIE = `${APIurlMovie}api_key=${APIkey}&query=${searchMovie}`
    const [allFindTV, setAllFindTV] = useState([])
    const [allFindMovies, setAllFindMovies] = useState([])
    const [allResult, setAllResult] = useState([])
    const [cast, setCast] = useState('')
    const [castId, setCastId] = useState('')


    useEffect(() => {
        fetch(URL_POPULAR)
            .then((res => res.json()))
            .then(data => {

                setAllResult(data.results);
            });

    }, [])

    function getCast(url) {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                // console.log(data);
                const castFive = data.cast.slice(0, 5).map(actor => actor.name)
                const ppum = cast.slice(0, 4)
                console.log(castFive);

                setCast(castFive)
                // setCastId(data.id)

            })

    }
    useEffect(getCast, [])


    function handleSearch(e) {
        e.preventDefault()

        fetch(`${URL_MOVIE}api_key=${APIkey}&query=${searchMovie}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.results);
                const film = data.results
                setAllFindMovies(data.results)
                fetch(`${URL_TV}api_key=${APIkey}&query=${searchMovie}`)
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
        API_URL_IMG,
        URL_TV,
        URL_MOVIE,
        handleSearch,
        allResult,
        setAllResult,
        allFindMovies,
        setAllFindMovies,
        allFindTV,
        setAllFindTV, searchMovie, setSearchMovie,
        APIkey,
        cast,
        setCast,
        getCast,
        castId,

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