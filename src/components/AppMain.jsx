import { useGlobalContext } from "../contexts/GlobalContext";
import AppCard from "./AppCard";
export default function AppMain() {
    const { allResult } = useGlobalContext()

    return (
        <main>

            <div className="container">
                <div className="row">


                    {allResult.map(movie =>
                        <AppCard key={movie.id} movie={movie} />

                    )}
                </div>
            </div>
        </main>
    )
}