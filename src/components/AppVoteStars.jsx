export default function AppVoteStars({ vote }) {
    const number = Math.ceil((vote) / 2)
    const array = Array.from({ length: number }, (_, i) => i + 1);

    return (
        <>
            {number == 0 ? <span>N/A <i className="bi bi-x-circle-fill"></i></span> : array.map((number, index) =>
                <span key={index}><i className="bi bi-star-fill"></i></span>
            )}

        </>
    )
}