import React, { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
    isMenuOpen: boolean;
    isDialogOpen:boolean;
    isIdiomaDialogOpen: boolean; 
    isMonedaDialogOpen: boolean; 
    isNuevoPaisDialogOpen:boolean;
    isNuevaComisionDialogOpen:boolean;
    isNuevaVentaAgenciaUVDialogOpen:boolean;
    isVentaAgenciaComercialUVDialogOpen:boolean;
    isVentaComercialAgenciaUVDialogOpen:boolean;
    isVentaRecargaComercialUVDialogOpen:boolean;

}


const UI_INITIAL_STATE: UIState = {
    isMenuOpen: false,
    isDialogOpen:false,
    isIdiomaDialogOpen:false,
    isMonedaDialogOpen:false,
    isNuevoPaisDialogOpen:false,
    isNuevaComisionDialogOpen:false,
    isNuevaVentaAgenciaUVDialogOpen:false,
    isVentaAgenciaComercialUVDialogOpen:false,
    isVentaComercialAgenciaUVDialogOpen:false,
    isVentaRecargaComercialUVDialogOpen:false,
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
    const toggleNuevaCajaDialog = ()=>{
        dispatch({type: '[UI] - ToggleDialog'});
    }
    const toggleNuevoIdiomaDialog= ()=>{
        dispatch({type: '[UI] - ToggleNuevoIdiomaDialog'});
    }
    const toggleNuevaMonedaDialog= ()=>{
        dispatch({type: '[UI] - ToggleNuevaMonedaDialog'});
    }
    const toggleNuevoPaisDialog= ()=>{
        dispatch({type: '[UI] - ToggleNuevoPaisDialog'});
    }
    const toggleNuevaComisionDialog= ()=>{
        dispatch({type: '[UI] - ToggleNuevaComisionDialog'});
    }
    const toggleNuevaVentaAgenciaUDialog= ()=>{
        dispatch({type: '[UI] - toggleNuevaVentaAgenciaUDialog'});
    }
    const toggleVentaAgenciaComercialUDialog= ()=>{
        dispatch({type: '[UI] - toggleVentaAgenciaComercialUDialog'});
    }
    const toggleVentaComercialAgenciaUDialog= ()=>{
        dispatch({type: '[UI] - toggleVentaComercialAgenciaUDialog'});
    }
    const toggleVentaRecargaComercialUDialog= ()=>{
        dispatch({type: '[UI] - toggleVentaRecargaComercialUDialog'});
    }
    
    

    return (<UIContext.Provider value={{
           ...state,

           // Metodos a regresar aqui para cumplir el contexto
           toggleSideMenu,
           toggleNuevaCajaDialog,
           toggleNuevoIdiomaDialog,
           toggleNuevaMonedaDialog,
           toggleNuevoPaisDialog,
           toggleNuevaComisionDialog,
           toggleNuevaVentaAgenciaUDialog,
           toggleVentaAgenciaComercialUDialog,
           toggleVentaComercialAgenciaUDialog,
           toggleVentaRecargaComercialUDialog,


        }}>
            { children }
        </UIContext.Provider>
    )
};


