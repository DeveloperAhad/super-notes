import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = props => {
    const [notes, setNotes] = useState([]);

    return (
        <AppContext.Provider value={[notes, setNotes]}>
            {props.children}
        </AppContext.Provider>
    )
}