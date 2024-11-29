import { useGlobalContext } from "../contexts/GlobalContext";
import flags from "../data/flags";
import AppVoteStars from "./AppVoteStars";

export default function AppCard({ movie }) {
    const { API_URL_IMG } = useGlobalContext()



    return (
        <div className="col-3">

            <div className="card">
                <div className="cardImg">
                    {movie.poster_path
                        === null ?
                        <div className='noFound'><i class="bi bi-x-circle"></i>
                            <div>No Img</div></div>
                        : <img src={`${API_URL_IMG}${movie.poster_path}`} alt="" />
                    }
                </div>
                <div className="cardBody">
                    {movie.title ?
                        <div className='title'> <strong>Title:</strong> {movie.title}</div>
                        : <div className='title'><strong>Title:</strong> {movie.name}</div>}

                    {movie.original_title ?
                        <div className='originalN'><strong>Original movie Title: </strong> {movie.original_title}</div>
                        : <div className='originalN'> <strong > Original TV name:  </strong > {movie.original_name}</ div>}
                    <div className='overview'><strong>Overviw: </strong>{movie.overview}</div>
                    <div className='language'>
                        language: {flags.includes(movie.original_language) ?
                            <img src={`http://localhost:5173/imgs/flags/${movie.original_language}.png`} alt="" />
                            :
                            <><img src={`http://localhost:5173/imgs/flags/xx.png`} alt="" /><p>{movie.original_language}</p></>
                        }
                    </div>
                    <div className="stars">
                        <AppVoteStars vote={movie.vote_average} />
                    </div>
                </div>


            </div>
        </div>
    )
}