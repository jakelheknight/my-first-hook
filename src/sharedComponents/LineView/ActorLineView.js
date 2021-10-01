import React from 'react'

export default function ActorLineView(actor) {
    return (
        <div onClick={() => console.log(actor)}>
            <button>{actor.name}</button>
        </div>
    )
}
