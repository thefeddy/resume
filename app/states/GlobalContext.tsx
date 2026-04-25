import { createContext, type ReactNode, useEffect, useState } from 'react';

interface GlobalContextType {
    darkmode: Boolean;
    setDarkmode: (stage: boolean) => void;

}

const defaultValue: GlobalContextType = {
    darkmode: true,
    setDarkmode: () => { }
};

export const GlobalContext = createContext<GlobalContextType>(defaultValue);

interface Props {
    children: ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
    const [darkmode, setDarkmode] = useState<boolean>(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkmode');
        if (savedMode !== null) {
            setDarkmode(JSON.parse(savedMode));
        }
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <GlobalContext.Provider value={{ darkmode: true, setDarkmode: () => { } }}>
                {children}
            </GlobalContext.Provider>
        );
    }

    return (
        <GlobalContext.Provider value={{ darkmode, setDarkmode }}>
            {children}
        </GlobalContext.Provider>
    );
};