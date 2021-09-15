import React from 'react'

export default function NameInputs({firstName, lastName, setFullName}) {
    function setFirstName(e) {
        setFullName({
            firstName: e?.target?.value,
            lastName
        })
    }    
    function setLastName(e) {
        setFullName({
            firstName,
            lastName: e?.target?.value
        })
    }
    return (
        <div>
            <div>
                First Name: <input value={firstName} onChange={setFirstName} />
            </div>
            <div>
                Last Name: <input value={lastName} onChange={setLastName} />
            </div>
        </div>
    )
}
