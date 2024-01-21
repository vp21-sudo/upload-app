"use client"
import { createContext, useContext, useState, ReactNode } from "react";

type ThemeContextType = {
    theme: string,
    toggleTheme: () => void
}

//create context with default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type ThemeProviderProps = {
    children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>("dark")

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const contextValue: ThemeContextType = { theme, toggleTheme };

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

// Create a custom hook to consume the context
const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export { ThemeProvider, useTheme };