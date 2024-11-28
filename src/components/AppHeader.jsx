import { useContext } from "react"
import GlobalContexts from "../contexts/GlobalContexts"
export default function AppHeader() {
    const { handleSearch, searchMovie, setSearchMovie } = useContext(GlobalContexts)
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