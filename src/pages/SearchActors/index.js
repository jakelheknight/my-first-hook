import { useState } from "react";
import { useCleanTxt } from "../../hooks/useCleanTxt";
import Results from "../../sharedComponents/Results/Results";

export default function SearchActors() {
    const [firstName, setFirstName] = useCleanTxt();
    const [lastName, setLastName] = useCleanTxt();
    return (
        <>
        <div>
            <div>
                First Name: <input placeholder="first name" value={firstName} onChange={(e) => setFirstName(e?.target?.value)} />
            </div>
            <div>
                Last Name: <input placeholder="last name" value={lastName} onChange={(e) => setLastName(e?.target?.value)} />
            </div>
        </div>
        <Results firstName={firstName} lastName={lastName}/>
        </>
    )
}
