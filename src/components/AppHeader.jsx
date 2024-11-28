export default function AppHeader() {
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