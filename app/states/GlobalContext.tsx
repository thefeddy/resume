import { createContext, type ReactNode, useEffect, useState } from 'react';

interface GlobalContextType {
    darkmode: boolean;
    role: string;
    toggleDarkMode: () => void; // Easier than passing true/false every time
}

const defaultValue: GlobalContextType = {
    darkmode: true,
    role: 'UI Engineer',
    toggleDarkMode: () => { }
};

export const GlobalContext = createContext<GlobalContextType>(defaultValue);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [darkmode, setDarkmode] = useState<boolean>(true);
    const [role] = useState<string>('UI Engineer');


    useEffect(() => {
        const savedMode = localStorage.getItem('darkmode');
        if (savedMode !== null) {
            setDarkmode(JSON.parse(savedMode));
        }
    }, []);


    useEffect(() => {
        const root = window.document.documentElement;
        const theme = darkmode ? 'dark' : 'light';

        root.setAttribute('data-theme', theme);
        localStorage.setItem('darkmode', JSON.stringify(darkmode));
    }, [darkmode]);

    const toggleDarkMode = () => setDarkmode(prev => !prev);

    return (
        <GlobalContext.Provider value={{ darkmode, toggleDarkMode, role }}>
            {children}
        </GlobalContext.Provider>
    );
};