import React from 'react'
import { AddOutlined, ChatOutlined, DeleteOutlined, GroupAddOutlined } from '@mui/icons-material';
import { Grid, Box, Chip, Link, Button } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import NextLink from 'next/link';


 {/* TABLA COLUMNAS*/}
 const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'nombreapellido', headerName:'NOMBRE Y APELLIDOS', width:180},
    { field:'movil', headerName:'MOVIL', width:100},
    { field:'idioma', headerName:'IDIOMA', width:150},
    { field:'pais', headerName:'PAIS', width:100},
    { field:'codigodoc', headerName:'CODIGO DOCUMENTO', width:100},

    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui el estado',
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


const ClientesPage = () => {
  return (
  
    <AdminLayout 
        titulo={' Clientes'} 
        subtitulo={'Lista de todos los clientes'}
        icon={<GroupAddOutlined/>}
    >

      {/* BOTONES DE ACCION  Y FILTROS*/}
      <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                    <Button 
                        sx={{ mr: 1, }}
                        color="secondary"
                        startIcon={ <AddOutlined /> }
                        href='/admin/clientes/NuevoCliente'
                        >
                        Nuevo
                    </Button>
                    <Button 

                        sx={{ mr: 1, }}
                        color="primary"
                        startIcon={ <ChatOutlined /> }
                        href='#'
                        >
                        Enviar SMS
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

export default ClientesPage