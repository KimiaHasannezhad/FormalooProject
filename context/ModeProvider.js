import React, { createContext ,useState } from 'react'

export const SwitchModeContext = createContext({
    mode: '',
    setMode: () => { },
})

export const SwitchModeProvider = (props) => {
    const [mode, setMode] = useState('view')
    return (
        <SwitchModeContext.Provider value={{ mode, setMode }}>
            {props.children}
        </SwitchModeContext.Provider>
    )
}
