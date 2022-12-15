import React from "react";
import { useContext} from "react";
import { useRouter } from "next/router";
import { Box, Collapse, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import {  AccountBalanceOutlined, AccountCircleOutlined, AccountTreeOutlined, AddHomeWork, AddHomeWorkOutlined, AdminPanelSettings, AssignmentReturnedOutlined, CleanHandsOutlined, CurrencyExchangeOutlined, DashboardOutlined, ExpandLess, ExpandMore, GroupAddOutlined, LanguageOutlined, LoginOutlined, MobileScreenShareOutlined, OutboxOutlined, PointOfSaleOutlined, PriceChangeOutlined, SchemaOutlined, SearchOutlined, Send, SendOutlined, SettingsOutlined, SportsScoreOutlined, SupervisedUserCircleOutlined, WalletOutlined } from "@mui/icons-material"

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
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>

                <ListItem>
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
                </ListItem>


                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: '' } }}
                    onClick={ () => navegateHacia('/admin/') }
                    >
                    <ListItemIcon>
                        <DashboardOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Resumen'} />
                </ListItem>
                <ListItem 
                    button 
                    sx={{ display: { xs: '', sm: '' } }}
                    onClick={ () => navegateHacia('/enviar/historialEnvios') }
                    >
                    <ListItemIcon>
                        <OutboxOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mis envios'} />
                </ListItem>

                <ListItem 
                    button sx={{ display: { xs: '', sm: '' } }}
                    onClick={ () => navegateHacia('/recibir/historialRecibir') }
                    >
                    <ListItemIcon>
                        <AssignmentReturnedOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mis pagos'} />
                </ListItem>

                <ListItem 
                    button sx={{ display: { xs: '', sm: '' } }}
                    onClick={ () => navegateHacia('/admin/cajauv/CajaUV') }
                    >
                    <ListItemIcon>
                        <PointOfSaleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Ventas UV'} />
                </ListItem>

                <ListItem button sx={{ display: { xs: '', sm: '' } }}>
                    <ListItemIcon>
                        <CurrencyExchangeOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Caja'} />
                </ListItem>

                <ListItem button sx={{ display: { xs: '', sm: '' } }} onClick={handleClick}>
                    <ListItemIcon>
                        <MobileScreenShareOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Móvil'} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={!open} timeout="auto" unmountOnExit>
                    <List>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/enviar/formuEnvioMovil') }
                    >
                    <ListItemIcon >
                        <SendOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Enviar" />
                    </ListItem>
                    </List>
                </Collapse>

                
                
                <ListItem button>
                    <ListItemIcon>
                        <WalletOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Wallet'} />
                </ListItem>




                {/* Admin usuario */}
                <Divider />
                <ListSubheader>Panel Usuario</ListSubheader>

                <ListItem button >
                    <ListItemIcon>
                        <AccountCircleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Perfil'}  />
                </ListItem>

                
                <ListItem button onClick={handleClick2}> 
                    <ListItemIcon>
                        <SettingsOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Administración'} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={!open2} timeout="auto" unmountOnExit>
                    <List>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/bancocentral/BancoCentral') }
                    >
                    <ListItemIcon >
                        <AccountBalanceOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Banco Central" />
                    </ListItem>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/comercial/Comercial') }
                    >
                    <ListItemIcon >
                        <AccountTreeOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Comercial" />
                    </ListItem>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/agencias/Agencias') }
                    >
                    <ListItemIcon >
                        <AddHomeWorkOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Agencias" />
                    </ListItem>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/formuEnvioMovil') }
                    >
                    <ListItemIcon >
                        <CleanHandsOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Cuentas" />
                    </ListItem>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/formuEnvioMovil') }
                    >
                    <ListItemIcon >
                        <LanguageOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Idiomas" />
                    </ListItem>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/formuEnvioMovil') }
                    >
                    <ListItemIcon >
                        <SportsScoreOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Paises" />
                    </ListItem>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/formuEnvioMovil') }
                    >
                    <ListItemIcon >
                        <GroupAddOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Clientes" />
                    </ListItem>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/formuEnvioMovil') }
                    >
                    <ListItemIcon >
                        <SupervisedUserCircleOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Usuarios" />
                    </ListItem>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/formuEnvioMovil') }
                    >
                    <ListItemIcon >
                        <CurrencyExchangeOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Monedas" />
                    </ListItem>
                    <ListItem button sx={{ pl: 4 } } 
                      onClick={ () => navegateHacia('/admin/formuEnvioMovil') }
                    >
                    <ListItemIcon >
                        <PriceChangeOutlined/>
                    </ListItemIcon>
                        <ListItemText primary="Precios" />
                    </ListItem>

                    </List>
                </Collapse>

                <ListItem button>
                    <ListItemIcon>
                        <AdminPanelSettings/>
                    </ListItemIcon>
                    <ListItemText primary={'Operaciones'} />
                </ListItem>

                <ListItem 
                    button
                    onClick={ () => navegateHacia('/auth/login') }
                >
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Salir'} />
                </ListItem>
            </List>
        </Box>
    </Drawer>
  )
}