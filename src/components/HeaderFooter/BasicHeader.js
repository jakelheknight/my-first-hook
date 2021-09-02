import React from 'react'

export default function BasicHeader({fullName}) {
    fullName = {
        firstName: "John",
        lastName: "Doe"
    }
    return (
        <div>
            <h1>
                Hollywood Search
            </h1>
            <div>
                { fullName.firstName } { fullName.lastName }
            </div>
        </div>
    )
}

