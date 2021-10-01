import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export default function AppContextProvider({children}) {
    const [focusedActor, setFocusedActor] = useState({})
    return (
        <AppContext.Provider value={{focusedActor, setFocusedActor}}>
            {children}
        </AppContext.Provider>
    )
}
