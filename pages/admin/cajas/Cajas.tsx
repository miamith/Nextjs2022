import React, { useContext } from 'react'
import {  AddCircleOutlined, AddOutlined, ArrowCircleDownOutlined, ArrowDownwardOutlined, ArrowUpwardOutlined, CheckCircleOutlineOutlined, CompareArrowsOutlined, CurrencyExchangeOutlined, DeleteOutlined, LocalPrintshopOutlined, PointOfSaleOutlined, RemoveCircleOutlined, ReplyAllOutlined } from '@mui/icons-material';
import { Grid, Box, Chip, Link, Button, IconButton } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import NextLink from 'next/link';

import { UIContext } from '../../../context';


 {/* TABLA COLUMNAS*/}
 const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'nombrecuenta', headerName:'NOMBRE CUENTA', width:150},
    { field:'numero', headerName:'NUMERO', width:110},
    { field:'gestor', headerName:'GESTOR', width:150},
    { field:'saldo', headerName:'SALDO', width:150},
    { field:'efectigoagencia', headerName:'EFECTIVO AGENCIA', width:150},
    { field:'efectiviMovil', headerName:'EFECTIVO MOVIL', width:100},
    { field:'comision', headerName:'COMISION', width:100},
    { field:'creditoUV', headerName:'CREDITO UV', width:150},
    { field:'bitodeUV', headerName:'DEBITO UV', width:150},
    { field:'cuentavinculada', headerName:'CUENTA VINCULADA', width:150},
    { field:'retiro', headerName:'RETIRO', width:100},
    { field:'tipocuenta', headerName:'TIPO DE CUENTA', width:100},
    { field:'ventauv', headerName:'VENTA UV', width:100},
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


const CajasPage = () => {

        {/* NAVEGACION DEL DIALOG: tomando nuestro UIContext */}
const { toggleNuevaVentaAgenciaUDialog} = useContext(UIContext);



  return (
  
    <AdminLayout 
        titulo={' Cajas'} 
        subtitulo={'Lista de cajas'}
        icon={<CurrencyExchangeOutlined/>}
    >

      {/* BOTONES DE ACCION  Y FILTROS*/}
      <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                    <Button 
                        sx={{ mr: 1, }}
                        color="secondary"
                        startIcon={ <AddOutlined /> }
                        href='/admin/cajas/NuevaCaja'
                        >
                        Nuevo
                    </Button>
                    <Button 
                                    
                        sx={{ mr: 1 }}
                        color="primary"
                        startIcon={ <AddCircleOutlined /> }
                        onClick={ toggleNuevaVentaAgenciaUDialog }
                        >
                        Creditar 
                    </Button>
                    <Button 
                         
                        sx={{ mr: 1, }}
                        color="warning"
                        startIcon={ <RemoveCircleOutlined /> }
                        href='/admin/supervisor/nuevo'
                        >
                        Debitar
                    </Button>
                    <Button 
                         
                        sx={{ mr: 1, }}
                        color="success"
                        startIcon={ <CompareArrowsOutlined /> }
                        href='/admin/cajeros/DetallesCaja'
                        >
                        Caja a Caja                    </Button>
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
                    
                    <IconButton color="primary" aria-label="Imprimir" size="small">
                         <LocalPrintshopOutlined fontSize="small"/>
                    </IconButton>
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

export default CajasPage