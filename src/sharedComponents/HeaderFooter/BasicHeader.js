import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContextProvider'
import FocusedActor from '../LineView/FocusedActor'

export default function BasicHeader({firstName, lastName}) {
    const context = useContext(AppContext)
    return (
        <>
            <div>
                <h1>
                    Hollywood Search
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/actors">Actor Search</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movie Search</Link>
                    </li>
                </ul>
            </div>
            <div>
                <FocusedActor />
            </div>
        </>
    )
}

