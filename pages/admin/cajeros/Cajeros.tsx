import React, { useContext } from 'react'
import {  AddOutlined, ArrowCircleDownOutlined, CasesOutlined, CheckCircleOutlineOutlined, CompareArrowsOutlined, DeleteOutlined, PointOfSaleOutlined, ReplyAllOutlined } from '@mui/icons-material';
import { Grid, Box, Chip, Link, Button } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import NextLink from 'next/link';

import { UIContext } from '../../../context';


 {/* TABLA COLUMNAS*/}
 const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'saldo', headerName:'SALDO', width:150},
    { field:'nombrecomp', headerName:'NOMBRE COMP', width:150},
    { field:'typoobjeto', headerName:'TIPO OBJETO', width:150},
    { field:'nombre', headerName:'NOMBRE', width:150},
    { field:'cuentaagencia', headerName:'CUENTA AGENCIA', width:150},
    { field:'comisioncaja', headerName:'COMISION CAJA', width:100},
    { field:'transtotal', headerName:'TRANSAC. TOTAL', width:100},
    { field:'numero', headerName:'NUMERO', width:110},
    { field:'comisiontotal', headerName:'COMISION TOTAL', width:150},
    { field:'servicio', headerName:'SERVICIO', width:100},
    { field:'gerente', headerName:'GERENTE', width:200},
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

const rows=[null
]


const CajerosPage = () => {

        {/* NAVEGACION DEL DIALOG: tomando nuestro UIContext */}
const { toggleNuevaVentaAgenciaUDialog} = useContext(UIContext);



  return (
  
    <AdminLayout 
        titulo={' Cajeros y cajas'} 
        subtitulo={'Lista de cajeos y cajas'}
        icon={<CasesOutlined/>}
    >

      {/* BOTONES DE ACCION  Y FILTROS*/}
      <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                    <Button 
                        sx={{ mr: 1, }}
                        color="secondary"
                        startIcon={ <AddOutlined /> }
                        href='/admin/cajeros/NuevoCajero'
                        >
                        Nuevo
                    </Button>
                    <Button 
                                    
                        sx={{ mr: 1 }}
                        color="primary"
                        startIcon={ <CheckCircleOutlineOutlined /> }
                        onClick={ toggleNuevaVentaAgenciaUDialog }
                        >
                        Agencia Cajero 
                    </Button>
                    <Button 
                         
                        sx={{ mr: 1, }}
                        color="success"
                        startIcon={ <ReplyAllOutlined /> }
                        href='/admin/supervisor/nuevo'
                        >
                        Cajero Agencia
                    </Button>
                    <Button 
                         
                        sx={{ mr: 1, }}
                        color="success"
                        startIcon={ <CompareArrowsOutlined /> }
                        href='/admin/cajeros/DetallesCaja'
                        >
                        Cajero Cajero
                    </Button>
                    <Button 
                        variant="outlined" 
                        sx={{ mr: 1, }}
                        color="success"
                        startIcon={ <ArrowCircleDownOutlined /> }
                        href='/admin/comercial/NuevoComercial'
                        >
                        Convert comision
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

export default CajerosPage