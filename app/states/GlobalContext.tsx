import { createContext, type ReactNode, useState } from 'react';

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
    const [darkmode, setDarkmode] = useState<Boolean>(true);

    return (
        <GlobalContext.Provider
            value={{ darkmode, setDarkmode }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
