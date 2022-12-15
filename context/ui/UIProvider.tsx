import React, { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
    isMenuOpen: boolean;
}


const UI_INITIAL_STATE: UIState = {
    isMenuOpen: false,
}


interface Props {
children?: React.ReactNode | undefined;
}

// UIProvider definido y exportado aqui LO VAMOS A USAR EN _app.txt
export const UIProvider:FC<Props>  = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer , UI_INITIAL_STATE );

    // Definir tipo de funcion para disparar la accion
    const toggleSideMenu = ()=>{
        dispatch({type: '[UI] - ToggleMenu'});
    }


    return (<UIContext.Provider value={{
           ...state,

           // Metodos a regresar aqui para cumplir el contexto
           toggleSideMenu,
        }}>
            { children }
        </UIContext.Provider>
    )
};


