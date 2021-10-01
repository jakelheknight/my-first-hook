import React from 'react'
import MovieLineView from './MovieLineView'

export default function FocusedActor({
    known_for_department, 
    name,
    profile_path,
    known_for
}) {
    return (
        <>
            <h1>{name}</h1>
            <img src={'https://image.tmdb.org/t/p/w500/' + profile_path} />
            <div>
                Known for {known_for_department}
            </div>
            <div>
                works:
            </div>
            {
                known_for?.map(movie => <MovieLineView {...movie} />)
            }
        </>
    )
}
