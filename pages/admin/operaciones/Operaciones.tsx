import React from 'react'
import { AddchartOutlined, AddHomeWorkOutlined, AddOutlined, ArrowCircleDownOutlined, CheckCircleOutlineOutlined, DeleteOutlined, FilterAltOutlined, LocalPrintshopOutlined, LockOpenOutlined, LockPersonOutlined, PointOfSaleOutlined, SearchOutlined } from '@mui/icons-material';
import { Grid, Box, Chip, Link, Button, Input, InputAdornment, IconButton, FormControl, InputLabel, Select, MenuItem, Divider } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import NextLink from 'next/link';

import { DatePicker, Space } from 'antd';


 {/* TABLA COLUMNAS*/}
 const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'code', headerName:'CODIGO', width:180},
    { field:'tipotrans', headerName:'TIPO DE TRANSAC', width:110},
    { field:'paisbene', headerName:'PAIS BENEF', width:150},
    { field:'servicio', headerName:'SERVICIO', width:100},
    { field:'numero', headerName:'NUMERO', width:110},
    { field:'valor', headerName:'VALOR', width:100},
    { field:'sentido', headerName:'SENTIDO', width:70},
    { field:'codigoope', headerName:'OPE', width:4},
    { field:'perador', headerName:'OPERADOR', width:100},
    { field:'asocia', headerName:'ADMIN AGENCIA', width:150},

    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra el estado',
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


const OperacionesPage = () => {

     {/* SELECT RANGO DE FECHAS */}
     const { RangePicker } = DatePicker; 
     const [dates, setDates] = React.useState([]);
     console.log(dates);


  return (
  
    <AdminLayout 
        titulo={' Operaciones'} 
        subtitulo={'Lista de todas las operaciones'}
        icon={<AddchartOutlined/>}
    >

              {/* BOTONES DE ACCION  Y FILTROS*/}
              <Box  display='flex' justifyContent='end' sx={{ mb: 1,mt:2 }}>
                                
                                          
                                <Box>
                                  <Input
                                    type='text'
                                    placeholder="Buscar..."
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        >
                                        <SearchOutlined />
                                        </IconButton>
                                    </InputAdornment>
                            }
                                    />
                                </Box>
                                 <Box>
                                    <FormControl sx={{ mr: 1, ml:1, minWidth: 160 }} size="small">
                                        <InputLabel>Servicio</InputLabel>
                                        <Select label="Servicio"  sx={{height: 32}} value={1}>
                                            <MenuItem value={1}>Todos</MenuItem>
                                            <MenuItem value={2}>RETIRO</MenuItem>
                                            <MenuItem value={3}>VENTA UV</MenuItem>                
                                        </Select>
                                    </FormControl>
                                    
                                 </Box>
                                 
                                 <Space direction="horizontal" size={4}>
                          
                                    <RangePicker
                                        onChange={(values) => {                                    
                                            
                                          }}
    
                                      />
                                 </Space>
    
                                     <Button
                                        variant="outlined" 
                                        sx={{  ml:1, mr:2 }}
                                        color="error"
                                        startIcon={ <FilterAltOutlined /> }
                                        href='/admin/comercial/nuevo'
                                        >
                                        Filtrar
                                    </Button>
                                    <Divider  orientation="vertical" flexItem />
                          
                          <Button 
                              
                              sx={{ mr: 1, ml:1 }}
                              color="success"
                              startIcon={ <CheckCircleOutlineOutlined /> }
                              href='/admin/supervisor/nuevo'
                              >
                              Validar 
                          </Button>
                          <Button 
                              sx={{ mr: 1, }}
                              color="warning"
                              startIcon={ <LockOpenOutlined /> }
                              href='/admin/supervisor/nuevo'
                              >
                              Desbloquear
                          </Button>
                          <Button
                              sx={{ mr: 1, }}
                              color="error"
                              startIcon={ <LockPersonOutlined /> }
                              href='/admin/supervisor/nuevo'
                              >
                              Bloquear
                          </Button>
                          <Button
                            sx={{ mr: 1, }}
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

export default OperacionesPage