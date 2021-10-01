import { useState } from "react";

const cleanTextReg = /[^\w\s]/gi;
const cleanEmailReg = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@↵(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/gi

export const useCleanTxt = (initial) => {
    const [state, setstate] = useState(initial);
    const setClenState = (txt) => {
        setstate(txt.replace(cleanTextReg, ""));
    }
    return [state, setClenState]
}