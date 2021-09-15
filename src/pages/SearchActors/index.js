import { useState } from "react";
import NameInputs from "./components/NameInputs";

export default function SearchActors() {
    const [fullName, setFullName] = useState({});
    return (
        <div>
            <NameInputs {...fullName} setFullName={setFullName} />
        </div>
    );
}
