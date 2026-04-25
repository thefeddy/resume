import { createContext, type ReactNode, useEffect, useState } from 'react';

interface GlobalContextType {
    darkmode: Boolean;
    role: String;
    setDarkmode: (stage: boolean) => void;

}

const defaultValue: GlobalContextType = {
    darkmode: true,
    role: 'UI Enginner',
    setDarkmode: () => { }
};

export const GlobalContext = createContext<GlobalContextType>(defaultValue);

interface Props {
    children: ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
    const [darkmode, setDarkmode] = useState<boolean>(true);
    const [isMounted, setIsMounted] = useState(false);
    const [role, setRole] = useState<string>('');

    useEffect(() => {
        const savedMode = localStorage.getItem('darkmode');
        if (savedMode !== null) {
            setDarkmode(JSON.parse(savedMode));
        }
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <GlobalContext.Provider value={{ darkmode: true, setDarkmode: () => { }, role }}>
                {children}
            </GlobalContext.Provider>
        );
    }

    return (
        <GlobalContext.Provider value={{ darkmode, setDarkmode, role }}>
            {children}
        </GlobalContext.Provider>
    );
};