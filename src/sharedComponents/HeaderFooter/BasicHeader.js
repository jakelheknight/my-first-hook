import React from 'react'
import { Link } from 'react-router-dom'

export default function BasicHeader({firstName, lastName}) {
    return (
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
    )
}

