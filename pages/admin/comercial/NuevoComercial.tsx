import React, {useState} from 'react'
import { AccountBalanceOutlined, AddHomeWorkOutlined, AddOutlined, ArrowCircleDownOutlined, CurrencyExchangeOutlined, DeleteOutlined, SaveOutlined } from '@mui/icons-material';
import { Box, Button, FormControlLabel, Grid, Switch, TextField, CardContent, Card, FormControl, InputLabel, Select, MenuItem, Stack, Divider, Tab, Link, Chip } from '@mui/material';
import {TabContext, TabPanel, TabList} from '@mui/lab';

import { AdminLayout } from '../../../components/layouts';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import NextLink from 'next/link';

{/* TABLA COLUMNAS CAJAS*/}
const columnsCajas: GridColDef[] = [
    { field:'id', headerName:'ID', width:4},
    { field:'nombre', headerName:'NOMBRE', width:180},
    { field:'numero', headerName:'NUMERO', width:110},
    { field:'saldo', headerName:'SALDO', width:100},
    { field:'cajero', headerName:'CAJERO', width:150},
    { field:'estado',
      headerName:'ESTADO',
      description:'Aqui muestra si el envio fue recibido o no',
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



const NuevoComercialPage = () => {

    const [value, setValue] = React.useState('1');
    
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

  return (

    <AdminLayout 
    titulo={' Nuevo Comercial'} 
    subtitulo={'Creacion de un comercial'}
    icon={<AccountBalanceOutlined/>}
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
                        variant="outlined" 
                        sx={{ mr: 2, }}
                        color="success"
                        startIcon={ <ArrowCircleDownOutlined /> }
                        href='/admin/supervisor/nuevo'
                        >
                        Recargar
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
                    <InputLabel>Supervisor Cuenta</InputLabel>
                    <Select variant='filled' labelId='supervisor' value={1} >
                        <MenuItem value={1}>ARSENIA RAFAELA</MenuItem>                 
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
                <Grid item xs={12}>
                    <TextField size="small" label="Saldo de la cuenta" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Total saldo Admin" variant='filled' fullWidth />
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
                    <TextField size="small" label="Saldo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Saldo UV total" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                   <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="No enviar SMS"
                    labelPlacement="start"
                    />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Pais de trabajo</InputLabel>
                    <Select variant='filled' labelId='pais' value={1} >
                        <MenuItem value={1}>GUINEA ECUATORIAL</MenuItem>                 
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
                <Tab value="1" icon={<CurrencyExchangeOutlined />} label="CAJAS" />
                <Tab value="2" icon={<AddHomeWorkOutlined />} label="AGENCIAS" />
            </TabList>
        </Box>
            <TabPanel value="1" > {/* TAB CAJAS DEL COMERCIAL */}

                        {/* BOTONES DE ACCION  Y FILTROS*/}
                <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>

                                <Button 
                                    color="secondary"
                                    sx={{ mr: 1, }}
                                    startIcon={ <AddOutlined /> }
                                    href='/admin/comercial/NuevoComercial'
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
                                columns={columnsCajas}
                                pageSize={5}
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
            <TabPanel value="2" > {/* TAB CAGENCIAS DEL COMERCIAL */}
                        {/* BOTONES DE ACCION  Y FILTROS*/}
                <Box  display='flex' justifyContent='end' sx={{ mb: 1, }}>

                                <Button 
                                    color="secondary"
                                    sx={{ mr: 1, }}
                                    startIcon={ <AddOutlined /> }
                                    href='/admin/comercial/NuevoComercial'
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
                                columns={columnsCajas}
                                pageSize={5}
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

export default NuevoComercialPage