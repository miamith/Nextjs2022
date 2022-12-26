import { createContext } from 'react';


interface ContextProps {
    isMenuOpen: boolean;
    isDialogOpen: boolean;
    isIdiomaDialogOpen: boolean; 
    isMonedaDialogOpen: boolean;
    isNuevoPaisDialogOpen:boolean;
    isNuevaComisionDialogOpen:boolean;
    isNuevaVentaAgenciaUVDialogOpen:boolean;
    isVentaAgenciaComercialUVDialogOpen:boolean;
    isVentaComercialAgenciaUVDialogOpen:boolean;
    isVentaRecargaComercialUVDialogOpen:boolean;

    // Metodos definidos
    toggleSideMenu: () => void;
    toggleNuevaCajaDialog:() => void;
    toggleNuevoIdiomaDialog:() => void;
    toggleNuevaMonedaDialog:() => void;
    toggleNuevoPaisDialog:() => void;
    toggleNuevaComisionDialog:() => void;
    toggleNuevaVentaAgenciaUDialog:() => void;
    toggleVentaAgenciaComercialUDialog:() => void;
    toggleVentaComercialAgenciaUDialog:() => void;
    toggleVentaRecargaComercialUDialog:() => void;

}


export const UIContext = createContext({} as ContextProps );