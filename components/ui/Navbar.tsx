import { useContext } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import {IconButton, AppBar,Typography, Toolbar,Link,Button,Box, Badge, Chip, useStepContext, useStepperContext} from "@mui/material";
import {  MoneyOffOutlined, SearchOutlined } from "@mui/icons-material";

import { UIContext } from '../../context';


export const Navbar = () => {

{/* MOSTRAR EN EL MENU LA PAGINA ACTIVA: useRouter() */}
const {asPath}= useRouter();
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

{/*MENU FACIL ENVIAR CAMBIAR RECIBIR*/}
<Box sx={{display:{xs:'none', sm:'block'}}}>
  <NextLink href='/enviar/formuEnvio' passHref legacyBehavior>
    <Link>
    <Button color={asPath==='/enviar/formuEnvio'? 'primary':'info' }>Enviar</Button>
    </Link>
  </NextLink>
  <NextLink href='/cambiar/formuCambiar' passHref legacyBehavior>
    <Link>
    <Button color={asPath==='/cambiar/formuCambiar'? 'primary':'info' } >Cambiar</Button>
    </Link>
  </NextLink>
  <NextLink href='/recibir/formuRecibir' passHref legacyBehavior>
    <Link >
    <Button color={asPath==='/recibir/formuRecibir'? 'primary':'info' } >Recibir</Button>
    </Link>
  </NextLink>
  </Box>

<Box flex={1}/>

{/*BUSCADOR */}
  <IconButton>
    <SearchOutlined/>
  </IconButton>

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

