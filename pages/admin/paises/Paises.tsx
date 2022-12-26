import React from 'react'
import { useContext } from 'react';
import { AddOutlined, DeleteOutlined, SportsScoreOutlined } from '@mui/icons-material';
import { Grid, Box, Chip, Link, Button } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import NextLink from 'next/link';

import { UIContext } from '../../../context';


 {/* TABLA COLUMNAS*/}
 const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'nombre', headerName:'NOMBRE', width:100},
    { field:'codificacion', headerName:'CODIFICACION', width:100},
    { field:'simbolo', headerName:'SIMBOLO', width:100},
    { field:'idioma', headerName:'IDIOMA', width:100},
    { field:'limitenvio', headerName:'LIMITE ENVIO', width:100},
    { field:'limitrecep', headerName:'LIMITE RECEPCION', width:100},
    { field:'partnerapi', headerName:'PARTNERS API', width:100},

    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra el estado de moneda',
      width:120,
      renderCell:(params: GridRenderCellParams)=>{
          return (
              params.row.estado
                    ? <Chip color="success" label="Activo" variant='outlined'/>
                    :<Chip color="error" label="Inactivo" variant='outlined'/>
                )
                    
        } 
    },
    { field:'desactivado',
    headerName:'DESACTIVADO',
    description:'Aqui muestra el estado de moneda',
    width:120,
    renderCell:(params: GridRenderCellParams)=>{
        return (
            params.row.estado
                  ? <Chip color="success" label="Activo" variant='outlined'/>
                  :<Chip color="error" label="Inactivo" variant='outlined'/>
              )
                  
      } 
  },
  { field:'desactiavdosms',
  headerName:'DESACTIVADO',
  description:'Aqui muestra el estado de moneda',
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

const rows=[null
]


const PaisesPage = () => {

      {/* NAVEGACION DEL DIALOG: tomando nuestro UIContext */}
const { toggleNuevoPaisDialog} = useContext(UIContext);


  return (
  
    <AdminLayout 
        titulo={' Paises'} 
        subtitulo={'Lista de todos los paises'}
        icon={<SportsScoreOutlined/>}
    >

      {/* BOTONES DE ACCION  Y FILTROS*/}
      <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                    <Button 
                        sx={{ mr: 1, }}
                        color="secondary"
                        startIcon={ <AddOutlined /> }
                        onClick={ toggleNuevoPaisDialog }
                        >
                        Nuevo
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
          
          {/* TABLA DE REGISTROS  MONEDAS */}
            <DataGrid
                    rows={[]}
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

export default PaisesPage  