import React from 'react'

export default function MovieLineView({poster_path, name, overview}) {
    return (
        <div>
            <img src={'https://image.tmdb.org/t/p/w500/' + poster_path} />
            <h3>{name}</h3>
            <p>{overview}</p>
        </div>
    )
}
