import React, { useState } from 'react'
import { useCallback } from 'react';
import MainContent from './MainContent';
import ThemeContext from './ThemeContext';

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback( () => {
        if ( theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [theme] );
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <MainContent/>
    </ThemeContext.Provider>
  )
}

export default DarkOrLight