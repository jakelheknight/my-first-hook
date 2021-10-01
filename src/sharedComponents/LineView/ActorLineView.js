import React, { useContext } from 'react'
import { AppContext } from '../../AppContextProvider'

export default function ActorLineView(actor) {
    const context = useContext(AppContext)
    return (
        <div onClick={() => context?.setFocusedActor(actor)}>
            <button>{actor.name}</button>
        </div>
    )
}
