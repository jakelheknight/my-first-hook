import { useState } from "react";

export default function SearchMovies() {
    const [movieName, setMovieName] = useState({});
    return (
        <div>
            <div>
                First Name: <input value={movieName} onChange={(e)=>setMovieName(e?.target?.value)} />
            </div>
        </div>
    )
}
