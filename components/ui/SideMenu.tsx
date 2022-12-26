import React from "react";
import { useContext} from "react";
import { useRouter } from "next/router";
import { Box, Collapse, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import {  AccountBalanceOutlined, AccountCircleOutlined, AccountTreeOutlined, AddchartOutlined, AddHomeWork, AddHomeWorkOutlined, AdminPanelSettings, AssignmentReturnedOutlined, CasesOutlined, CleanHandsOutlined, CurrencyExchangeOutlined, DashboardOutlined, ExpandLess, ExpandMore, GroupAddOutlined, LanguageOutlined, LoginOutlined, MobileScreenShareOutlined, OutboxOutlined, PointOfSaleOutlined, PriceChangeOutlined, SchemaOutlined, SearchOutlined, Send, SendOutlined, SettingsOutlined, SportsScoreOutlined, SupervisedUserCircleOutlined, WalletOutlined } from "@mui/icons-material"

import { UIContext } from "../../context"


export const SideMenu = () => {
    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
 const handleClick2 = () => {
      setOpen2(!open2);
    };
 

{/* REACCION BASADA AL STATE O ESTADO DEL CONTEXTO E IMPORTAMOS useRouter*/}
const ruta = useRouter(); 
const {isMenuOpen, toggleSideMenu} = useContext( UIContext );
const navegateHacia= (url: string)=>{
        toggleSideMenu();
        ruta.push(url);
}

  return (
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        // HAY UNA PROPIEDAD EN EL Drawer que al hacer clic fuera onClose
        onClose={toggleSideMenu}
    >
        <Box sx={{ width: 250, paddingTop: 4 }}>
            
            <List>

                <ListItemButton>
                    <Input
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                >
                                 <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </ListItemButton>


                <ListItemButton 
                     
                    sx={{ display: { xs: '', sm: '' } }}
                    onClick={ () => navegateHacia('/admin/') }
                    >
                    <ListItemIcon>
                        <DashboardOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Resumen'} />
                </ListItemButton>
                <ListItemButton 
                     
                    sx={{ display: { xs: '', sm: '' } }}
                    onClick={ () => navegateHacia('/enviar/historialEnvios') }
                    >
                    <ListItemIcon>
                        <OutboxOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mis envios'} />
                </ListItemButton>

                <ListItemButton 
                     sx={{ display: { xs: '', sm: '' } }}
                    onClick={ () => navegateHacia('/recibir/historialRecibir') }
                    >
                    <ListItemIcon>
                        <AssignmentReturnedOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mis pagos'} />
                </ListItemButton>

                <ListItemButton 
                     sx={{ display: { xs: '', sm: '' } }}
                    onClick={ () => navegateHacia('/admin/cajauv/CajaUV') }
                    >
                    <ListItemIcon>
                        <PointOfSaleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Ventas UV Caja'} />
                </ListItemButton>

                <ListItemButton  sx={{ display: { xs: '', sm: '' } }}>
                    <ListItemIcon>
                        <CurrencyExchangeOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Caja'} />
                </ListItemButton>

                <ListItemButton  sx={{ display: { xs: '', sm: '' } }} onClick={handleClick}>
                    <ListItemIcon>
                        <MobileScreenShareOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Móvil'} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={!open} timeout="auto" unmountOnExit>
                    <List>
                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/enviar/formuEnvioMovil') }
                    >
                    <ListItemIcon >
                        <SendOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Enviar" />
                    </ListItemButton>
                    </List>
                </Collapse>

                
                
                <ListItemButton >
                    <ListItemIcon>
                        <WalletOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Wallet'} />
                </ListItemButton>


                {/* Admin usuario */}
                <Divider />
                <ListSubheader>Panel Administrativo</ListSubheader>

                <ListItemButton  
                onClick={ () => navegateHacia('/admin/usuarios/NuevoUsuario') }
                >
                    <ListItemIcon>
                        <AccountCircleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Perfil'}  />
                </ListItemButton>

                
                <ListItemButton  onClick={handleClick2}> 
                    <ListItemIcon>
                        <SettingsOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Administración'} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={!open2} timeout="auto" unmountOnExit>
                    <List>
                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/bancocentral/BancoCentral') }
                    >
                    <ListItemIcon >
                        <AccountBalanceOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Banco Central" />
                    </ListItemButton>
                    
                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/comercial/Comercial') }
                    >
                    <ListItemIcon >
                        <AccountTreeOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Comercial" />
                    </ListItemButton>

                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/agencias/Agencias') }
                    >
                    <ListItemIcon >
                        <AddHomeWorkOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Agencias" />
                    </ListItemButton>

                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/cajas/Cajas') }
                    >
                    <ListItemIcon >
                        <CurrencyExchangeOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Cajas" />
                    </ListItemButton>

                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/cajeros/Cajeros') }
                    >
                    <ListItemIcon >
                        <CasesOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Cajeros" />
                    </ListItemButton>

                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/formuEnvioMovil') }
                    >
                    <ListItemIcon >
                        <CleanHandsOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Cuentas" />
                    </ListItemButton>
                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/idiomas/Idiomas') }
                    >
                    <ListItemIcon >
                        <LanguageOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Idiomas" />
                    </ListItemButton>
                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/paises/Paises') }
                    >
                    <ListItemIcon >
                        <SportsScoreOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Paises" />
                    </ListItemButton>
                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/clientes/Clientes') }
                    >
                    <ListItemIcon >
                        <GroupAddOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Clientes" />
                    </ListItemButton>
                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/usuarios/Usuarios') }
                    >
                    <ListItemIcon >
                        <SupervisedUserCircleOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Usuarios" />
                    </ListItemButton>
                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/monedas/Monedas') }
                    >
                    <ListItemIcon >
                        <CurrencyExchangeOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Monedas" />
                    </ListItemButton>
                    <ListItemButton  sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/precios/Precios') }
                    >
                    <ListItemIcon >
                        <PriceChangeOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Precios" />
                    </ListItemButton>

                    </List>
                </Collapse>

                <ListItemButton sx={{  } } 
                      onClick={ () => navegateHacia('/admin/operaciones/Operaciones') }
                    >
                    <ListItemIcon>
                        <AddchartOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Operaciones'} />
                </ListItemButton>

                <ListItemButton 
                    
                    onClick={ () => navegateHacia('/auth/login') }
                >
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Salir'} />
                </ListItemButton>
            </List>
        </Box>
    </Drawer>
  )
}