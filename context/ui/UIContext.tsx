import { createContext } from 'react';


interface ContextProps {
    isMenuOpen: boolean;


    // Metodos definidos
    toggleSideMenu: () => void;
}


export const UIContext = createContext({} as ContextProps );