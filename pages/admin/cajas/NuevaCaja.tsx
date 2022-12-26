import React, {useState} from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AddOutlined, ArrowCircleDownOutlined, DeleteOutlined, PointOfSaleOutlined, SaveOutlined, TransferWithinAStationOutlined, FilterAltOutlined, SearchOutlined, CurrencyExchangeOutlined, Rotate90DegreesCwOutlined, ReplyAllOutlined, CheckCircleOutlineOutlined, LockOpenOutlined, LockPersonOutlined, OutboxOutlined, CleanHandsOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, FormControl, FormControlLabel, Grid, InputLabel, Link, MenuItem, Select, Stack, Switch, Tab, TextField, Divider, InputAdornment, IconButton, Input } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';

import { DatePicker, Space } from 'antd';


import { AdminLayout } from '../../../components/layouts';
import NextLink from 'next/link';
import { UIContext } from '../../../context';
import { useContext } from 'react';



{/* TABLA COLUMNAS AGENCIAS*/}
const columnsCuentasVinculadas: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'nombrecuenta', headerName:'NOMBRE CUENTA', width:150},
    { field:'numerocuenta', headerName:'NUMERO CUENTA', width:150},
    { field:'tipocuenta', headerName:'TIPO CUENTA', width:150},  
    { field:'saldosubcuenta', headerName:'SALDO SUBCUENTA', width:150},
    { field:'gestor', headerName:'GESTOR', width:100},
    { field:'saldocuenta', headerName:'SALDO CUENTA', width:150},
    { field:'saldototal', headerName:'SALDO TOTAL', width:150},
   
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

{/* TABLA COLUMNAS TRANSACCIONES*/}
const columnsTransUV: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'a', headerName:'A', width:150},
    { field:'tipotrans', headerName:'TIPO TRANSACCION', width:110},
    { field:'fechatrans', headerName:'FECHA TRANSACCION', width:100},
    { field:'realizadopor', headerName:'REALIZADO', width:200},
    { field:'monto', headerName:'MONTO', width:110},
    { field:'numero', headerName:'NUMERO', width:4},
    { field:'sentido', headerName:'SENTIDO', width:100},
    { field:'servicio', headerName:'SERVICIO', width:150},
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

{/* TABLA COLUMNAS TRANSACCIONES*/}
const columnsTransEfectivo: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'Pais', headerName:'PAIS', width:150},
    { field:'cambio', headerName:'CAMBIO', width:110},
    { field:'comision', headerName:'COMISION', width:100},
    { field:'cajacomision', headerName:'CAJA COMISION', width:110},
    { field:'mlinecomision', headerName:'COMISION MLINE', width:4},
    { field:'sentido', headerName:'SENTIDO', width:100},
    { field:'servicio', headerName:'SERVICIO', width:150},
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

const NuevaCajaPage = () => {
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
    titulo={' Nueva Caja'} 
    subtitulo={'Creacion de una nueva caja'}
    icon={<CurrencyExchangeOutlined/>}
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
                  <FormControl fullWidth size='small'>
                    <InputLabel>Tipo de cuenta</InputLabel>
                    <Select variant='filled' label='Tipo de cuenta' value={1} >
                        <MenuItem value={1}>Cajero</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Nombre de la Cuenta" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Numero de la Cuenta" variant='filled' fullWidth />
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
                    <InputLabel>Cuenta vinculada</InputLabel>
                    <Select variant='filled' label='Cuenta vinculada' value={1} >
                        <MenuItem value={1}>AMATRANS</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Gestor</InputLabel>
                    <Select variant='filled' label='Gestor' value={1} >
                        <MenuItem value={1}>AMA MITUY</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Saldo de la cuenta" variant='filled' fullWidth />
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
                <Tab value="1" icon={<CleanHandsOutlined />} label="CUENTAS VINCULADAS" />
                <Tab value="2" icon={<TransferWithinAStationOutlined />} label="TRANSACCIONES UV " />
                <Tab value="3" icon={<OutboxOutlined />} label="TRANSACCIONES EFECTIVO" />  
            </TabList>
        </Box>

        <TabPanel value="1" > {/* TAB CAJAS */}

            {/* BOTONES DE ACCION  Y FILTROS*/}
            <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                    
                            
             {/*   <Box>
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
                 </Box>  */}
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
                        sx={{ mr: 2, ml:1 }}
                        color="error"
                        startIcon={ <FilterAltOutlined /> }
                        href='/admin/comercial/nuevo'
                        >
                        Filtrar
                    </Button>

                    <Divider  orientation="vertical" flexItem />

                    <Button 
                        color="secondary"
                        sx={{ mr: 1, ml:2 }}
                        startIcon={ <AddOutlined /> }
                        onClick={toggleNuevaCajaDialog}
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

            <Grid container className='fadeIn'>

            <Grid item xs={12} sx={{ height:200, width:'100%'}}>

            {/* TABLA DE REGISTROS CAJAS  */}
            <DataGrid
                    rows={[]}
                    columns={columnsCuentasVinculadas}
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
                                    color="secondary"
                                    sx={{ mr: 1, ml:2 }}
                                    startIcon={ <AddOutlined /> }
                                    onClick={toggleNuevaCajaDialog}
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

                <Grid container className='fadeIn'>

                    <Grid item xs={12} sx={{ height:200, width:'100%'}}>
                    
                    {/* TABLA DE REGISTROS TRANSACCIONES  */}
                        <DataGrid
                                rows={[]}
                                columns={columnsTransUV}
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

              <TabPanel value="3" > {/* TAB TRANSACCIONES */}

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
                                    color="secondary"
                                    sx={{ mr: 1, ml:2 }}
                                    startIcon={ <AddOutlined /> }
                                    onClick={toggleNuevaCajaDialog}
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

                <Grid container className='fadeIn'>

                    <Grid item xs={12} sx={{ height:200, width:'100%'}}>
                    
                    {/* TABLA DE REGISTROS TRANSACCIONES  */}
                        <DataGrid
                                rows={[]}
                                columns={columnsTransEfectivo}
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

export default NuevaCajaPage