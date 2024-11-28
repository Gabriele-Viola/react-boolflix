import { createContext, useState } from "react";

export const GlobalContext = createContext()

const APIkey = 'bf3833151ec0112ceeff966557fa120e&query='
const APIurl = 'https://api.themoviedb.org/3/search/movie?api_key='

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([])

    const fetchMovies = (search) => {
        fetch(`${APIurl}api_key=${APIkey}&query=${search}`)
            .then(resp = resp.json())
            .then(data => {
                setMovies(data.results)
            })
        return (
            <GlobalContext.Provider value={{ movies, fetchMovies }}>
                {children}
            </GlobalContext.Provider>
        )
    }
}