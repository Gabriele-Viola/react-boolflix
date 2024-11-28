import { createContext, useEffect } from "react";

export const GlobalContext = createContext()

export const MovieProvider = ({ children }) => {
    const APIkey = 'bf3833151ec0112ceeff966557fa120e'
    const APIurl = 'https://api.themoviedb.org/3/search/movie?'
    const [allFind, setAllFind] = useState([])

    const fetchMovies = (movieToFind) => {


        fetch(`${APIurl}api_key=${APIkey}&query=${movieToFind}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.results);
                setAllFind(data.results)

            })
        useEffect(fetchMovies, [allFind])
    }

    return (
        <GlobalContext.Provider value={{ allFind, fetchMovies }}>
            {children}
        </GlobalContext.Provider>
    )
}