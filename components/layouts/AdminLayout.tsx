import { FC  } from 'react';
import { Box, Typography } from '@mui/material';

import { AdminNavbar } from '../admin/';
import {SideMenu} from '../ui';
import {NuevaCajaDialog} from '../cajas';
import {NuevoIdiomaDialog} from '../idiomas';
import { NuevaMonedaDialog } from '../monedas';
import { NuevoPaisDialog } from '../paises';
import { NuevaComisionDialog } from '../comisiones';
import { NuevaVentaAgenciaUVDialog, VentaAgenciaComercialUVDialog } from '../agencias';
import { VentaComercialAgenciaUVDialog } from '../agencias/VentaComercialAgenciaUVDialog';
import { VentaRecargaComercialUVDialog } from '../agencias/VentaRecargaComercialUVDialog';



interface Props {
    titulo: string;
    subtitulo: string;
    icon?: JSX.Element;
    children: React.ReactNode | React.ReactNode[];
    
}

 export const AdminLayout:FC<Props> = ({ children, titulo, subtitulo,icon}) => {
  return (
    <>

        <nav>
            <AdminNavbar />
        </nav>

       <SideMenu></SideMenu>
       
       {/* AQUI VA TODO MODAL DIALOG */}
       <NuevaCajaDialog></NuevaCajaDialog>
       <NuevoIdiomaDialog></NuevoIdiomaDialog>
       <NuevaMonedaDialog></NuevaMonedaDialog>
       <NuevoPaisDialog></NuevoPaisDialog>
       <NuevaComisionDialog></NuevaComisionDialog>
       <NuevaVentaAgenciaUVDialog></NuevaVentaAgenciaUVDialog>
       <VentaAgenciaComercialUVDialog></VentaAgenciaComercialUVDialog>
       <VentaComercialAgenciaUVDialog></VentaComercialAgenciaUVDialog>
       <VentaRecargaComercialUVDialog></VentaRecargaComercialUVDialog>
        
        
        <main style={{
            margin:'80px auto',
            maxWidth:'1440px',
            padding:'0px 30px',
           

        }}>
        
        <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component='h1'>
                {icon}
                {titulo}
            </Typography>
            <Typography variant='h2' sx={{mb:0}}>{subtitulo}</Typography>
            
        </Box> 

{/* AQUI VA TODO EL CONTENIDO DE LAS PAGINAS A MOSTRAR */}
        <Box className='fadein'>
            { children }
        </Box>       

        </main>

        { /* TODO footer*/}
        <footer>
        { /* TODO coustomfooter*/ }
        </footer>
    </>
  )
}
