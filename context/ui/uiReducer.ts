import { UIState } from './';


type UIActionType = 
 | { type: '[UI] - ToggleMenu' } 
 | { type: '[UI] - ToggleDialog' } 
 | { type: '[UI] - ToggleNuevoIdiomaDialog' } 
 | { type: '[UI] - ToggleNuevaMonedaDialog' } 
 | { type: '[UI] - ToggleNuevoPaisDialog' } 
 | { type: '[UI] - ToggleNuevaComisionDialog' } 
 | { type: '[UI] - toggleNuevaVentaAgenciaUDialog' }
 | { type: '[UI] - toggleVentaAgenciaComercialUDialog' } 
 | { type: '[UI] - toggleVentaComercialAgenciaUDialog' }
 | { type: '[UI] - toggleVentaRecargaComercialUDialog' }
 

export const uiReducer = ( state:UIState, action: UIActionType): UIState => {

 switch (action.type) {
  case '[UI] - ToggleMenu':
   return {
    ...state,
    isMenuOpen: !state.isMenuOpen
   }
   case '[UI] - ToggleDialog':
    return {
     ...state,
     isDialogOpen: !state.isDialogOpen
    }
   case '[UI] - ToggleNuevoIdiomaDialog':
    return {
     ...state,
     isIdiomaDialogOpen: !state.isIdiomaDialogOpen
    } 
   case '[UI] - ToggleNuevaMonedaDialog':
    return {
     ...state,
     isMonedaDialogOpen: !state.isMonedaDialogOpen
    } 
   case '[UI] - ToggleNuevoPaisDialog':
      return {
       ...state,
       isNuevoPaisDialogOpen: !state.isNuevoPaisDialogOpen
      } 
    case '[UI] - ToggleNuevaComisionDialog':
      return {
        ...state,
        isNuevaComisionDialogOpen: !state.isNuevaComisionDialogOpen
      }  
    case '[UI] - toggleNuevaVentaAgenciaUDialog':
      return {
        ...state,
        isNuevaVentaAgenciaUVDialogOpen: !state.isNuevaVentaAgenciaUVDialogOpen
      }
    case '[UI] - toggleVentaAgenciaComercialUDialog':
      return {
        ...state,
        isVentaAgenciaComercialUVDialogOpen: !state.isVentaAgenciaComercialUVDialogOpen
      }
    case '[UI] - toggleVentaComercialAgenciaUDialog':
        return {
          ...state,
          isVentaComercialAgenciaUVDialogOpen: !state.isVentaComercialAgenciaUVDialogOpen
      }
    case '[UI] - toggleVentaRecargaComercialUDialog':
        return {
          ...state,
          isVentaComercialAgenciaUVDialogOpen: !state.isVentaComercialAgenciaUVDialogOpen
      }       
      
      

  default:
   return state;

 }

}