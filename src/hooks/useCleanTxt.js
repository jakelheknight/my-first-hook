import { useState } from "react";

const cleanTextReg = /[^\w\s]/gi;

export const useCleanTxt = (initial) => {
    const [state, setstate] = useState(initial);
    const setClenState = (txt) => {
        setstate(txt.replace(cleanTextReg, ""));
    }
    return [state, setClenState]
}