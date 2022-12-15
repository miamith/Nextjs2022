import React, {useState} from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AddOutlined, ArrowCircleDownOutlined, DeleteOutlined, PointOfSaleOutlined, SaveOutlined, TransferWithinAStationOutlined, FilterAltOutlined, SearchOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, FormControl, FormControlLabel, Grid, InputLabel, Link, MenuItem, Select, Stack, Switch, Tab, TextField, Divider, InputAdornment, IconButton, Input } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';

import { DatePicker, Space } from 'antd';


import { AdminLayout } from '../../../components/layouts';
import NextLink from 'next/link';

{/* TABLA COLUMNAS CAJAS*/}
const columns: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'tipotrans', headerName:'TIPO TRANSACCION', width:200},
    { field:'numero', headerName:'NUMERO', width:110},
    { field:'sentido', headerName:'SENTIDO', width:70},
    { field:'codigoope', headerName:'OPE', width:4},
    { field:'monto', headerName:'MONTO', width:100},
    { field:'asociada', headerName:'ASOCIADA', width:150},
    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra el estado de la transaccion',
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

const NuevaCajaUVPage = () => {

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
    titulo={' Nueva Caja UV'} 
    subtitulo={'Creacion de una nueva caja de valores de unidad'}
    icon={<PointOfSaleOutlined/>}
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
                    <InputLabel>Administrador Cuenta</InputLabel>
                    <Select label='Administrador Cuenta' variant='filled' labelId='administrador' value={1} >
                        <MenuItem value={1}>ADMININSULAR</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Nombre" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Numero" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Nombre usuario" variant='filled' fullWidth />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField size="small" label="Gsm" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="Esta activo"
                    labelPlacement="start"
                    />
                    <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="Reiniciar contraseña"
                    labelPlacement="start"
                    />
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
                    <TextField size="small" label="Transaccion total" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Credito total" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Debito total" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Saldo UV total" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Pais de trabajo</InputLabel>
                    <Select variant='filled' labelId='pais' value={1} >
                        <MenuItem value={1}>GUINEA ECUATORIAL</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                   <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="Validacion requerida"
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
                <Tab value="1" icon={<TransferWithinAStationOutlined />} label="TRANSACCIONES" />
            </TabList>
        </Box>
            <TabPanel value="1" > {/* TAB TRANSACCIONES UV*/}

                        {/* BOTONES DE ACCION  Y FILTROS*/}
                <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>
                                
                                          
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
                                    href='/admin/comercial/NuevoComercial'
                                    >
                                    Vender
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    sx={{ mr: 2, }}
                                    color="success"
                                    startIcon={ <ArrowCircleDownOutlined /> }
                                    href='/admin/supervisor/nuevo'
                                    >
                                    Restituir
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
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5,50,100]}
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

export default NuevaCajaUVPage