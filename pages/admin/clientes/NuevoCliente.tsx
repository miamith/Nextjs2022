import React, {useState} from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {  DeleteOutlined, SaveOutlined, FilterAltOutlined, SearchOutlined, CheckCircleOutlineOutlined, LockOpenOutlined, LockPersonOutlined, GroupAddOutlined, SystemSecurityUpdateGoodOutlined, OutboxOutlined, AssignmentReturnedOutlined, AddOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, FormControl, FormControlLabel, Grid, InputLabel, Link, MenuItem, Select, Stack, Switch, Tab, TextField, Divider, InputAdornment, IconButton, Input } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';

import { DatePicker, Space } from 'antd';


import { AdminLayout } from '../../../components/layouts';
import NextLink from 'next/link';
import { UIContext } from '../../../context';
import { useContext } from 'react';



{/* TABLA COLUMNAS ENVIOS*/}
const columnsEnvios: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'monto', headerName:'MONTO', width:150},
    { field:'comision', headerName:'COMISION', width:100},
    { field:'comisioncajero', headerName:'COMISION CAJERO', width:110},
    { field:'receptor', headerName:'RECEPTOR', width:150},
    { field:'recibir', headerName:'RECIBIR', width:140},
    { field:'cobrar', headerName:'A COBRAR', width:140},
    { field:'codigoope', headerName:'OPE', width:4},
    { field:'servicio', headerName:'SERVICIO', width:100},
    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra el estado',
      width:120,
      renderCell:(params: GridRenderCellParams)=>{
          return (
              params.row.estado
                    ? <Chip color="success" label="Pagado" variant='outlined'/>
                    :<Chip color="error" label="No pagado" variant='outlined'/>
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

{/* TABLA COLUMNAS RETIROS*/}
const columnsRetiros: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'monto', headerName:'MONTO', width:150},
    { field:'comision', headerName:'COMISION', width:100},
    { field:'comisioncajero', headerName:'COMISION CAJERO', width:110},
    { field:'remitente', headerName:'REMITENTE', width:150},
    { field:'cobrado', headerName:'COBRADO', width:140},
    { field:'codigoope', headerName:'OPE', width:4},
    { field:'servicio', headerName:'SERVICIO', width:100},
    { field:'referencia', headerName:'REFERENCIA', width:100},
    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra el estado',
      width:120,
      renderCell:(params: GridRenderCellParams)=>{
          return (
              params.row.estado
                    ? <Chip color="success" label="Pagado" variant='outlined'/>
                    :<Chip color="error" label="No pagado" variant='outlined'/>
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


{/* TABLA COLUMNAS DINERO MOVIL*/}
const columnsDineroMovil: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'montocobrar', headerName:'MONTO A COBRAR', width:150},
    { field:'operador', headerName:'OPERADOR', width:150},
    { field:'receptor', headerName:'RECEPTOR', width:150},
    { field:'identificacion', headerName:'IDENTIFICACION', width:100},
    { field:'comisioncajero', headerName:'COMISION CAJERO', width:110},
    { field:'remitente', headerName:'REMITENTE', width:150},
    { field:'monto', headerName:'MONTO', width:140},
    { field:'codigoope', headerName:'OPE', width:4},
    { field:'servicio', headerName:'SERVICIO', width:100},
    { field:'partner', headerName:'PARTNER API', width:100},
    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra el estado',
      width:120,
      renderCell:(params: GridRenderCellParams)=>{
          return (
              params.row.estado
                    ? <Chip color="success" label="Pagado" variant='outlined'/>
                    :<Chip color="error" label="No pagado" variant='outlined'/>
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

const NuevoClientePage = () => {
    {/* NAVEGACION DEL DIALOG: tomando nuestro UIContext */}
const { toggleNuevaCajaDialog} = useContext(UIContext);

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
    titulo={' Nuevo Cliente'} 
    subtitulo={'Creacion de un nuevo cliente'}
    icon={<GroupAddOutlined/>}
     >
          {/* BOTONES DE ACCION  Y FILTROS*/}
          <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                    
                    <Button 
                        sx={{ mr: 2, }}
                        color="secondary"
                        startIcon={ <SaveOutlined /> }
                        href='/admin/supervisor/NuevoBancoCentral'
                        >
                        Guardar
                    </Button>
                    <Button
                        color="warning"
                        startIcon={ <DeleteOutlined /> }
                        href='/admin/supervisor/nuevo'
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
                    <TextField size="small" label="Nombre y apellidos" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Movil" variant='filled' fullWidth />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField size="small" label="Codigo documento" variant='filled' fullWidth />
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
                    <InputLabel>Idioma</InputLabel>
                    <Select variant='filled' label='Idioma' value={1} >
                        <MenuItem value={1}>Español</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Pais</InputLabel>
                    <Select variant='filled' label='Pais' value={1} >
                        <MenuItem value={1}>GUINEA ECUATORIAL</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                   <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="No enviar SMS"
                    labelPlacement="start"
                    />
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
                <Tab value="1" icon={<OutboxOutlined />} label="ENVIOS" />
                <Tab value="2" icon={<AssignmentReturnedOutlined />} label="RETIROS" />
                <Tab value="3" icon={<SystemSecurityUpdateGoodOutlined />} label="DINERO MOVIL" />
            </TabList>
        </Box>

        <TabPanel value="1" > {/* TAB ENVIOS */}

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
                                        sx={{  ml:1, mr:1 }}
                                        color="error"
                                        startIcon={ <FilterAltOutlined /> }
                                        href='/admin/comercial/nuevo'
                                        >
                                        Filtrar
                                    </Button>
                                    <Divider  orientation="vertical" flexItem />
                              
                                    <Button 
                                        
                                        sx={{ mr: 2, ml:1 }}
                                        color="success"
                                        startIcon={ <CheckCircleOutlineOutlined /> }
                                        href='/admin/supervisor/nuevo'
                                        >
                                        Validar 
                                    </Button>
                                    <Button 
                                        
                                        sx={{ mr: 2, }}
                                        color="warning"
                                        startIcon={ <LockOpenOutlined /> }
                                        href='/admin/supervisor/nuevo'
                                        >
                                        Desbloquear
                                    </Button>
                                    <Button
                                        color="error"
                                        startIcon={ <LockPersonOutlined /> }
                                        href='/admin/supervisor/nuevo'
                                        >
                                        Bloquear
                                    </Button>
    
                                   
                  </Box>

            <Grid container className='fadeIn'>

            <Grid item xs={12} sx={{ height:200, width:'100%'}}>

            {/* TABLA DE REGISTROS ENVIOS  */}
            <DataGrid
                    rows={[]}
                    columns={columnsEnvios}
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

            <TabPanel value="2" > {/* TAB TRANSACCIONES */}

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
                                    sx={{  ml:1, mr:1 }}
                                    color="error"
                                    startIcon={ <FilterAltOutlined /> }
                                    href='/admin/comercial/nuevo'
                                    >
                                    Filtrar
                                </Button>
                                <Divider  orientation="vertical" flexItem />
                          
                                <Button 
                                    
                                    sx={{ mr: 2, ml:1 }}
                                    color="success"
                                    startIcon={ <CheckCircleOutlineOutlined /> }
                                    href='/admin/supervisor/nuevo'
                                    >
                                    Validar 
                                </Button>
                                <Button 
                                    
                                    sx={{ mr: 2, }}
                                    color="warning"
                                    startIcon={ <LockOpenOutlined /> }
                                    href='/admin/supervisor/nuevo'
                                    >
                                    Desbloquear
                                </Button>
                                <Button
                                    color="error"
                                    startIcon={ <LockPersonOutlined /> }
                                    href='/admin/supervisor/nuevo'
                                    >
                                    Bloquear
                                </Button>

                               
                </Box>

                <Grid container className='fadeIn'>

                    <Grid item xs={12} sx={{ height:200, width:'100%'}}>
                    
                    {/* TABLA DE REGISTROS TRANSACCIONES  */}
                        <DataGrid
                                rows={[]}
                                columns={columnsRetiros}
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

            
            <TabPanel value="3" > {/* TAB DINERO MOVIL */}

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
                                    sx={{  ml:1, mr:1 }}
                                    color="error"
                                    startIcon={ <FilterAltOutlined /> }
                                    href='/admin/comercial/nuevo'
                                    >
                                    Filtrar
                                </Button>
                                <Divider  orientation="vertical" flexItem />
                                <Button 
                                    sx={{  ml:1 }}
                                    color="secondary"
                                    startIcon={ <AddOutlined /> }
                                    href='/admin/clientes/NuevoCliente'
                                    >
                                    Nuevo
                                </Button>
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
                                    color="error"
                                    startIcon={ <LockPersonOutlined /> }
                                    href='/admin/supervisor/nuevo'
                                    >
                                    Bloquear
                                </Button>

                               
                </Box>

                <Grid container className='fadeIn'>

                    <Grid item xs={12} sx={{ height:200, width:'100%'}}>
                    
                    {/* TABLA DE REGISTROS TRANSACCIONES  */}
                        <DataGrid
                                rows={[]}
                                columns={columnsDineroMovil}
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

export default NuevoClientePage