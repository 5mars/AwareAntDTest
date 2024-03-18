import React, {useEffect, useState, createContext} from 'react'
import { ConfigProvider } from 'antd'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme)

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme)
    }

    const darkTheme = {
        // all the dark theme colors
    }
    
    const lightTheme = {
        // all the light theme colors
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ConfigProvider theme={theme}>
                {children}
            </ConfigProvider>
        </ThemeContext.Provider>
    )
}


export default ThemeProvider