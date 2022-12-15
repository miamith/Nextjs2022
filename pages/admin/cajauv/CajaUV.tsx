import React from 'react'
import { AddOutlined, DeleteOutlined, PointOfSaleOutlined } from '@mui/icons-material';
import { Grid, Box, Chip, Link, Button } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import NextLink from 'next/link';


 {/* TABLA COLUMNAS*/}
 const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'nombre', headerName:'NOMBRE', width:180},
    { field:'numero', headerName:'NUMERO', width:110},
    { field:'gerente', headerName:'GERENTE', width:150},
    { field:'saldo', headerName:'SALDO', width:100},

    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra el estado de la caja',
      width:120,
      renderCell:(params: GridRenderCellParams)=>{
          return (
              params.row.estado
                    ? <Chip color="success" label="Activo" variant='outlined'/>
                    :<Chip color="error" label="Inactivo" variant='outlined'/>
                )
                    
        } 
    },

    { field:'creador', headerName:'CREADOR', width:150},
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
    {id:1,nombre:'Caja Venta UV Malabo',numero:'99922334401',gerente:'ALIA MBA',
     saldo:'100.000',estado:false,creador:'28/11/2022',fecha:'28/11/2022'   
    },

    {id:2,nombre:'Caja Venta UV Bata',numero:'99922334402',gerente:'ALIA MBA',
    saldo:'100.000',estado:false,creador:'28/11/2022',fecha:'28/11/2022'   
   }
]


const CajaUVPage = () => {
  return (
  
    <AdminLayout 
        titulo={' Cajas UV'} 
        subtitulo={'Lista de cajas UV para vender'}
        icon={<PointOfSaleOutlined/>}
    >

      {/* BOTONES DE ACCION  Y FILTROS*/}
      <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                    <Button 
                        sx={{ mr: 2, }}
                        color="secondary"
                        startIcon={ <AddOutlined /> }
                        href='/admin/cajauv/NuevaCajaUV'
                        >
                        Nueva
                    </Button>
                    <Button
                        color="warning"
                        startIcon={ <DeleteOutlined /> }
                        href='/admin/supervisor/nuevo'
                        >
                        Borrar
                    </Button>
      </Box>

      <Grid container spacing={2} className='fadeIn'>

        <Grid item xs={12} sx={{ height:400, width:'100%'}}>
          
          {/* TABLA DE REGISTROS  CAJAS UV */}
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

export default CajaUVPage