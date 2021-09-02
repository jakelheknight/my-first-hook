import React from 'react'

export default function ShowActor({
    name,
    known_for
}) {
    return (
        <div style={{marginBottom: 20}}>
            {/* {name} Known for roles in { known_for.map(({title}, index, arr) => `${ title }${ index !== (arr.length - 1) ? ', ' : ''}`) } */}
        </div>
    )
}
