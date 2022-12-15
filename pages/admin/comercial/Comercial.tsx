import React from 'react'
import { AccountTreeOutlined, AddOutlined, FilterAltOutlined } from '@mui/icons-material';
import { Grid, Box, Chip, Link, Button } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import NextLink from 'next/link';


 {/* TABLA COLUMNAS*/}
 const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'nombre', headerName:'NOMBRE', width:180},
    { field:'numero', headerName:'NUMERO', width:110},
    { field:'gerente', headerName:'GERENTE', width:100},
    { field:'saldo', headerName:'SALDO', width:100},
    { field:'supervisor', headerName:'SUPERVISOR', width:150},
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


    { field:'creado', headerName:'CREADOR', width:100},
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
    {id:1,nombre:'ARSENIA RAFAELA',numero:'99922334401',gerente:'M.Bata',saldo:'100.000.000', 
    supervisor:'ARSENIA RAFAELA',estado:false,creado:'ARSENIA',fecha:'28/11/2022'   
    },

    {id:2,nombre:'ARSENIA RAFAELA',numero:'99922334401',gerente:'M.Bata',saldo:'100.000.000', 
    supervisor:'ARSENIA RAFAELA',estado:false,creado:'ARSENIA',fecha:'28/11/2022'   
    }
]


const ComercialPage = () => {
  return (
  
    <AdminLayout 
        titulo={' Comercial'} 
        subtitulo={'Lista de comerciales'}
        icon={<AccountTreeOutlined/>}
    >

      {/* BOTONES DE ACCION  Y FILTROS*/}
      <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                    <Button
                        variant="outlined" 
                        sx={{ mr: 2, }}
                        color="error"
                        startIcon={ <FilterAltOutlined /> }
                        href='/admin/comercial/nuevo'
                        >
                        Filtrar
                    </Button>
                    <Button 
                        color="secondary"
                        startIcon={ <AddOutlined /> }
                        href='/admin/comercial/NuevoComercial'
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
                    disableSelectionOnClick
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

export default ComercialPage