import React from 'react'

export default function BasicHeader({firstName, lastName}) {
    return (
        <div>
            <h1>
                Hollywood Search
            </h1>
            <div>
                { firstName } { lastName }
            </div>
        </div>
    )
}

