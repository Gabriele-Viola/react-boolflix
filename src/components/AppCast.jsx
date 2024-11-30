import { useGlobalContext } from "../contexts/GlobalContext"
export default function AppCast() {
    const { cast, setCast } = useGlobalContext()

    console.log(!cast ? 'vuoto' : cast[1]);

    return (
        <>

            {!cast ? 'loading' : cast.map((actor, index) => <div key={index}>{actor}</div>)}
        </>
    )
}