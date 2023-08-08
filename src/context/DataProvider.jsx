import React, { createContext, useState } from "react"; // Fixed typo in import statement

export const DataContext = createContext(null);

const DataProvider = ({ children }) => { // Added children as a parameter

    const [html, setHTML] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    

    return (
        <DataContext.Provider
            value={{
                html,
                setHTML,
                css,
                setCss,
                js, // Added js and setJs to the context value
                setJs
            }}
        >
            {children} {/* Render the children components */}
        </DataContext.Provider>
    );
}

export default DataProvider;
