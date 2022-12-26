import React from 'react'
import { AddOutlined, SupervisedUserCircleOutlined } from '@mui/icons-material';
import { Grid, Box, Chip, Link, Button } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import NextLink from 'next/link';


 {/* TABLA COLUMNAS*/}
 const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'nombreusuario', headerName:'NOMBRE USUARIO', width:100},
    { field:'pais', headerName:'PAIS', width:110},
    { field:'cuenta', headerName:'CUENTA', width:200},

    { field:'sesion',
      headerName:'SESION',
      description:'Aqui muestra si conectado',
      width:120,
      renderCell:(params: GridRenderCellParams)=>{
          return (
              params.row.estado
                    ? <Chip color="success" label="Activa" variant='outlined'/>
                    :<Chip color="error" label="Inactiva" variant='outlined'/>
                )
                    
        } 
    },
    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra si esta activo o bloqueado',
      width:120,
      renderCell:(params: GridRenderCellParams)=>{
          return (
              params.row.estado
                    ? <Chip color="success" label="Activo" variant='outlined'/>
                    :<Chip color="error" label="Inactivo" variant='outlined'/>
                )
                    
        } 
    },

    { field:'ultimaconexion', headerName:'ULTIMA CONEXION', width:180},
    
    { field:'fecha', headerName:'FECHA CREACION', width:100},
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
    {id:1,nombreusuario:'MIGUEL',pais:'GUINEA E.',cuenta:'AIREPI', sesion:true,
     estado:true, ultimaconexion:'22/12/2022',fecha:'28/11/2022'   
    }
]


const UsuariosPage = () => {
  return (
  
    <AdminLayout 
        titulo={' Usuarios'} 
        subtitulo={'Lista de usuarios de la aplicacion'}
        icon={<SupervisedUserCircleOutlined/>}
    >

      {/* BOTONES DE ACCION  Y FILTROS*/}
      <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>

                    <Button 
                        color="secondary"
                        startIcon={ <AddOutlined /> }
                        href='/admin/usuarios/NuevoUsuario'
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

export default UsuariosPage