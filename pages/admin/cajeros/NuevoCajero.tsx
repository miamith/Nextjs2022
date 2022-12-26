import React, {useState} from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AddOutlined, ArrowCircleDownOutlined, DeleteOutlined, PointOfSaleOutlined, SaveOutlined, TransferWithinAStationOutlined, FilterAltOutlined, SearchOutlined, CurrencyExchangeOutlined, Rotate90DegreesCwOutlined, ReplyAllOutlined, CheckCircleOutlineOutlined, LockOpenOutlined, LockPersonOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, FormControl, FormControlLabel, Grid, InputLabel, Link, MenuItem, Select, Stack, Switch, Tab, TextField, Divider, InputAdornment, IconButton, Input } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';

import { DatePicker, Space } from 'antd';


import { AdminLayout } from '../../../components/layouts';
import NextLink from 'next/link';
import { UIContext } from '../../../context';
import { useContext } from 'react';



{/* TABLA COLUMNAS AGENCIAS*/}
const columnsCajeros: GridColDef[] = [
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

{/* TABLA COLUMNAS TRANSACCIONES*/}
const columnsTrans: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'fechatrans', headerName:'FECHA TRANSACCION', width:150},
    { field:'numero', headerName:'NUMERO', width:110},
    { field:'paisbenefi', headerName:'PAIS BENEFICIARIO', width:100},
    { field:'realizadopor', headerName:'REALIZADO', width:200},
    { field:'monto', headerName:'MONTO', width:110},
    { field:'codigoope', headerName:'OPE', width:4},
    { field:'sentido', headerName:'SENTIDO', width:100},
    { field:'servicio', headerName:'SERVICIO', width:150},
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

const NuevoCajeroPage = () => {
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
    titulo={' Nueva Agencia'} 
    subtitulo={'Creacion de una nueva agencia'}
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
                    <TextField size="small" label="Nombre Agencia" variant='filled' fullWidth />
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
                    label="No enviar SMS"
                    labelPlacement="start"
                    />
                    <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="Validar UV"
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
                    <TextField size="small" label="Numero" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Pais de trabajo</InputLabel>
                    <Select variant='filled' label='Pais de trabajo' value={1} >
                        <MenuItem value={1}>GUINEA ECUATORIAL</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                   <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="Esta activo"
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
                <Tab value="1" icon={<CurrencyExchangeOutlined />} label="CAJAS" />
                <Tab value="2" icon={<TransferWithinAStationOutlined />} label="TRANSACCIONES" />
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
                        variant="outlined" 
                        sx={{ mr: 2, }}
                        color="success"
                        startIcon={ <ArrowCircleDownOutlined /> }
                        href='/admin/comercial/NuevoComercial'
                        >
                        Convert comision
                    </Button>
                    <Button 
                         
                        sx={{ mr: 2, }}
                        color="success"
                        startIcon={ <ReplyAllOutlined /> }
                        href='/admin/supervisor/nuevo'
                        >
                        Caja Agencia
                    </Button>
                    <Button 
                        
                        sx={{ mr: 2, }}
                        color="success"
                        startIcon={ <Rotate90DegreesCwOutlined /> }
                        href='/admin/supervisor/nuevo'
                        >
                        Agencia Caja
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
                    columns={columnsCajeros}
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

            <Grid container  >
                <Stack spacing={2} direction='row' justifyContent='flex-end' >
                    <Grid item xs={12}>
                        <TextField size="small" label="Saldo" variant='filled' disabled fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField size="small"  label="Comision total" variant='filled' disabled fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField size="small"  label="Transaccion total" variant='filled' disabled fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField size="small" label="Comisiones cajas" variant='filled' disabled fullWidth />
                    </Grid>
                </Stack>

            </Grid>

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
                                columns={columnsTrans}
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

export default NuevoCajeroPage