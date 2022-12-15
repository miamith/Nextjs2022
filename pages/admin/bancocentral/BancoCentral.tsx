import React from 'react'
import { AccountBalanceOutlined, AddOutlined, FilterAltOutlined } from '@mui/icons-material';
import { Grid, Box, Chip, Link, Button } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import NextLink from 'next/link';


 {/* TABLA COLUMNAS*/}
 const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'nombre', headerName:'NOMBRE', width:180},
    { field:'numero', headerName:'NUMERO', width:110},
    { field:'usuario', headerName:'USUARIO', width:100},
    { field:'gsm', headerName:'GSM', width:100},
    { field:'sede', headerName:'SEDE', width:80},
    { field:'saldo', headerName:'SALDO', width:100},
    { field:'saldototal', headerName:'SALDO TOTAL', width:100},
    { field:'totaluv', headerName:'TOTAL UV', width:100},

    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra si el envio fue recibido o no',
      width:120,
      renderCell:(params: GridRenderCellParams)=>{
          return (
              params.row.estado
                    ? <Chip color="success" label="Activo" variant='outlined'/>
                    :<Chip color="error" label="Inactivo" variant='outlined'/>
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
                Ver
             </Link>
           </NextLink>
              )
                  
      } 
  },

];

const rows=[
    {id:1,nombre:'ARSENIA RAFAELA',numero:'99922334401',usuario:'ALIA MBA', gsm:'222512842',
     sede:'MALABO', saldo:'100.000', saldototal:'500.000', totaluv:'1.700.000',
     estado:false,fecha:'28/11/2022'   
    },

    {id:2,nombre:'ARSENIA MBA',numero:'99911334401',usuario:'ALIA MBA', gsm:'222512842',
     sede:'BATA', saldo:'100.000', saldototal:'500.000', totaluv:'1.700.000',
     estado:false,fecha:'28/11/2022'   
    },
    {id:'>',nombre:'SUBTOTAL',numero:'',usuario:'', gsm:'',
    sede:'', saldo:'200.000', saldototal:'500.000', totaluv:'1.700.000',
    estado:null,fecha:''   
   }
]


const BancoCentralPage = () => {
  return (
  
    <AdminLayout 
        titulo={' Banco Central'} 
        subtitulo={'Lista de bancos centrales y cede'}
        icon={<AccountBalanceOutlined/>}
    >

      {/* BOTONES DE ACCION  Y FILTROS*/}
      <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                    <Button
                        variant="outlined" 
                        sx={{ mr: 2, }}
                        color="error"
                        startIcon={ <FilterAltOutlined /> }
                        href='/admin/bancocentral/nuevo'
                        >
                        Filtrar
                    </Button>
                    <Button 
                        color="secondary"
                        startIcon={ <AddOutlined /> }
                        href='/admin/bancocentral/NuevoBancoCentral'
                        >
                        Nuevo
                    </Button>
      </Box>

      <Grid container spacing={2} className='fadeIn'>

        <Grid item xs={12} sx={{ height:400, width:'100%'}}>
          
          {/* TABLA DE REGISTROS  */}
            <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10,50,100]}
                    rowHeight={35}
                    checkboxSelection
                    components={{ Toolbar: GridToolbar }}
                    componentsProps={{
                      toolbar: {
                          showQuickFilter: true,
                          quickFilterProps: { debounceMs: 500 },
                      },
                  }}

                                        
            />


          </Grid>

        
      </Grid>

    </AdminLayout>


  )
}

export default BancoCentralPage