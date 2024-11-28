import { GlobalContext } from "../contexts/GlobalContext"
import { useState } from "react"
export default function AppHeader() {
    const [searchMovie, setSearchMovie] = useState('')

    const { allFind, fetchMovies } = GlobalContext
    console.log('ciao');

    function handleSearch(e) {
        e.preventDefault(e)
        console.log(fetchMovies(searchMovie));

        fetchMovies(searchMovie)
        console.log(allFind);

    }

    return (
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
    )
}