import React, {useState} from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { DeleteOutlined, SaveOutlined, FilterAltOutlined, SearchOutlined, PriceChangeOutlined, AddOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, FormControl, Grid, InputLabel, Link, MenuItem, Select, Stack, Tab, Divider, InputAdornment, IconButton, Input } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';

import { DatePicker, Space } from 'antd';


import { AdminLayout } from '../../../components/layouts';
import NextLink from 'next/link';
import { UIContext } from '../../../context';
import { useContext } from 'react';



{/* TABLA COLUMNAS COMISIONES*/}
const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'del', headerName:'DEL MONTO', width:180},
    { field:'al', headerName:'AL MONTO', width:180},
    { field:'comision', headerName:'COMISION', width:150},
    { field:'areas', headerName:'AREAS', width:100},

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



const NuevoPrecioPage = () => {
    {/* NAVEGACION DEL DIALOG: tomando nuestro UIContext */}
const { toggleNuevaComisionDialog} = useContext(UIContext);

    const [value, setValue] = React.useState('1');
    
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

      {/* SELECT RANGO DE FECHAS */}
    const { RangePicker } = DatePicker; 
    const [dates, setDates] = React.useState([]);
    console.log(dates);
    
      

  return (

    <AdminLayout 
    titulo={' Nuevo Precio'} 
    subtitulo={'Creacion de una nueva tarificacion'}
    icon={<PriceChangeOutlined/>}
     >
          {/* BOTONES DE ACCION  Y FILTROS*/}
          <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                    
                    <Button 
                        sx={{ mr: 2, }}
                        color="secondary"
                        startIcon={ <SaveOutlined /> }
                        href='/admin/precios/nuevo'
                        >
                        Guardar
                    </Button>
                    <Button
                        color="warning"
                        startIcon={ <DeleteOutlined /> }
                        href='/admin/precios/borrar'
                        >
                        Borrar
                    </Button>
      </Box>
      
      <Grid container spacing={2}>

       <Grid item xs={8} sm={6} >
         <Card className='summary-card' >
           <CardContent>
           <Stack spacing={1}>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Salida</InputLabel>
                    <Select variant='filled' label='Salida' value={1} >
                        <MenuItem value={1}>GUINEA ECUATORIAL</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
             </Stack>
           </CardContent>
         </Card>
        </Grid>

        <Grid item xs={8} sm={6} >
         <Card className='summary-card' >
           <CardContent>
           <Stack spacing={1}>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Destino</InputLabel>
                    <Select variant='filled' label='Salida' value={1} >
                        <MenuItem value={1}>CAMERUN</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
             </Stack>
           </CardContent>
         </Card>
        </Grid>

      </Grid>

    <Box sx={{ width: '100%' }}>
        <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList  onChange={handleChange} aria-label="Informacion vinculada" centered textColor="secondary">
                <Tab value="1" icon={<PriceChangeOutlined />} label="COMISIONES" />
                
            </TabList>
        </Box>

          <TabPanel value="1" > {/* TAB COMISIONES */}

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
                                    
                                    sx={{ mr: 1,ml:2 }}
                                    color="primary"
                                    startIcon={ <AddOutlined /> }
                                    onClick={toggleNuevaComisionDialog}
                                    >
                                    Nueva
                                </Button>
                                <Button 
                                    
                                    sx={{ }}
                                    color="warning"
                                    startIcon={ <DeleteOutlined /> }
                                    href='/admin/supervisor/nuevo'
                                    >
                                    Borrar
                                </Button>

                               
                </Box>

                <Grid container className='fadeIn'>

                    <Grid item xs={12} sx={{ height:200, width:'100%'}}>
                    
                    {/* TABLA DE REGISTROS TRANSACCIONES  */}
                        <DataGrid
                                rows={[]}
                                columns={columns}
                                pageSize={10}
                                rowsPerPageOptions={[10,50,100]}
                                components={{ Toolbar: GridToolbar }}
                                componentsProps={{
                                toolbar: {
                                    showQuickFilter: true,
                                    quickFilterProps: { debounceMs: 500 },
                                },
                            }}
                            rowHeight={35}
                            checkboxSelection
                            disableSelectionOnClick
                                                    
                        />


                    </Grid>

                    
                </Grid>
            </TabPanel>
           
        </TabContext>
    </Box>


    </AdminLayout>


  )
}

export default NuevoPrecioPage