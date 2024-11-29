import nettoflixxo from '/imgs/nettoflixxo.png'
import { useContext } from "react"
import GlobalContexts from "../contexts/GlobalContexts"
export default function AppHeader() {
    const { handleSearch, searchMovie, setSearchMovie } = useContext(GlobalContexts)
    return (
        <header>
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
        </header>
    )
}