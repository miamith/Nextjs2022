import { useContext } from "react";
import NextLink from "next/link";

import { AppBar,Typography, Toolbar,Link,Button,Box, Badge, Chip} from "@mui/material";
import {  MoneyOffOutlined } from "@mui/icons-material";

import { UIContext } from '../../context';


export const AdminNavbar = () => {

{/* NAVEGACION DEL MENU: tomando nuestro UIContext */}
const { toggleSideMenu} = useContext(UIContext);


  return (
   <AppBar>
    <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
            <Link  display='flex' alignItems='center'> 
            <Typography variant="h6">M-line </Typography>
            <Typography sx={{ml:0.5}}>App</Typography>
            </Link>
        </NextLink>

<Box flex={1}/>


  {/*SALDO */}

<NextLink href="cuentas" passHref legacyBehavior>
  <Link >
  <Badge badgeContent={2} color="secondary">
  <Chip icon={<MoneyOffOutlined/>} label="167.026 XAF" variant="outlined" />
  </Badge>
  </Link>
</NextLink>

{/*BOTON QUE MUESTRA MENU */}
<Button onClick={ toggleSideMenu }>
  MENU
</Button>

    </Toolbar>
   </AppBar>
  )
}

