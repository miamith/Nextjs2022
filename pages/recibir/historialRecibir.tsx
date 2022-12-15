import NextLink from 'next/link';
import { Typography, Grid, Chip, Link, IconButton, InputBase, Divider, Paper } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { MlineLayout } from '../../components/layouts';
import { Directions, Search } from '@mui/icons-material';


 {/* TABLA COLUMNAS*/}
const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:10},
    { field:'remitente', headerName:'REMITENTE', width:200},
    { field:'monto', headerName:'MONTO', width:100},
    { field:'comision', headerName:'COMISION', width:100},
    { field:'beneficiario', headerName:'BENEFICIARIO', width:200},
    { field:'agencia', headerName:'AGENCIA', width:100},
    { field:'caja', headerName:'CAJA', width:100},
    { field:'agente', headerName:'AGENTE', width:100},

    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra si el envio fue recibido o no',
      width:120,
      renderCell:(params: GridRenderCellParams)=>{
          return (
              params.row.estado
                    ? <Chip color="success" label="Cobrado" variant='outlined'/>
                    :<Chip color="error" label="Pendiente" variant='outlined'/>
                )
                    
        } 
    },


    { field:'fecha', headerName:'FECHA', width:100},
    { field:'accion',
    headerName:'ACCION',
    width:120,
    sortable:false,
    renderCell:(params: GridRenderCellParams)=>{
        return (
           <NextLink href={`/enviar/892134`} passHref legacyBehavior >
             <Link underline='always' >
                Ver envio
             </Link>
           </NextLink>
              )
                  
      } 
  },

];

const rows=[
    {id:1,remitente:'Miguel Angel MITUY',monto:'80.000XAF', comision:'3.000XAF',
     beneficiario:'Nicanor NGUEMA NGUEMA', agencia:'00100', caja:'JUPITER',
     agente:'AP001531',estado:false,fecha:'28/11/2022'   
    },
    {id:2,remitente:'Andres MBUSI',monto:'30.000XAF', comision:'3.000XAF',
     beneficiario:'PELAGIO MBA', agencia:'00200', caja:'LUNA',
     agente:'AP001231',estado:true,fecha:'10/11/2022'   
     },
     {id:3,remitente:'Miguel Angel MITUY',monto:'80.000XAF', comision:'3.000XAF',
     beneficiario:'Nicanor NGUEMA NGUEMA', agencia:'00100', caja:'JUPITER',
     agente:'AP001531',estado:true,fecha:'28/11/2022'   
      }
]


const historialEnvios = () => {
  return (
    <MlineLayout titulo={'Historial de envios '} paginaDescripcion={'Todos los envios realizados'} >
      <Typography variant='h2'  component='h2'>Historial de envios</Typography>

        <Grid container>
        
          <Grid item xs={12} sx={{ height:650, width:'100%'}}>
          
          {/* TABLA DE REGISTROS */}
            <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    
               />


          </Grid>
        </Grid>

    </MlineLayout>
  )
}

export default historialEnvios