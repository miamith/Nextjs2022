import React, {useContext, useState} from 'react'
import { AddchartOutlined, ArrowCircleDownOutlined, CheckCircleOutlineOutlined, CompareArrowsOutlined, DeleteOutlined, FilterAltOutlined, LocalPrintshopOutlined, LockOpenOutlined, LockPersonOutlined, ReplyAllOutlined, SaveOutlined  } from '@mui/icons-material';
import { Box, FormControlLabel, Grid, Switch, TextField, FormControl, InputLabel, Select, MenuItem, Stack, Divider, Chip, Input, Button, IconButton, InputAdornment } from '@mui/material';


import { AdminLayout } from '../../../components/layouts';
import { Space, DatePicker } from 'antd';
import { UIContext } from '../../../context';



const DetallesCajaPage = () => {

            {/* NAVEGACION DEL DIALOG: tomando nuestro UIContext */}
const { toggleNuevaVentaAgenciaUDialog} = useContext(UIContext);


     {/* SELECT RANGO DE FECHAS */}
     const { RangePicker } = DatePicker; 
     const [dates, setDates] = React.useState([]);
     console.log(dates);

    const [value, setValue] = React.useState('1');
    
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

  return (

    <AdminLayout 
    titulo={' Detalles Caja'} 
    subtitulo={'Detalles de una caja'}
    icon={<AddchartOutlined/>}
     >
       
      
        {/* BOTONES DE ACCION  Y FILTROS*/}
        <Box  display='flex' justifyContent='end' sx={{ mb: 1,mt:2 }}>
                                
                   <Button 
                        sx={{ mr: 1, }}
                        color="secondary"
                        startIcon={ <SaveOutlined /> }
                        href='/admin/supervisor/NuevoBancoCentral'
                        >
                        Guardar
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
                        href='/admin/supervisor/nuevo'
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
                                   
         </Box>
      <Grid container spacing={2} justifyContent='center'>

       <Grid item xs={5}>
           <Stack spacing={2} >
                <Grid item xs={12}>
                    <TextField size="small" label="Numero" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Nombre*" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Nombre Usuario*" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Pais de trabajo</InputLabel>
                    <Select variant='filled' labelId='Pais de trabajo' value={1} >
                        <MenuItem value={1}>Guinea Ecuatorial</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid> 
                <Grid item xs={12}>
                    <TextField size="small" label="Gsm*" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="Activo"
                    labelPlacement="start"
                    />
                    <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="No enviar SMS"
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
       </Grid>

        <Grid item xs={5} > 
          <Stack spacing={2}>
                <Grid item xs={12}>
                    <TextField size="small" label="Cuenta Agencia" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Trans total" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Debito total" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Credito total" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Saldo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Comision total" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Comision cajera" variant='filled' fullWidth />
                </Grid>

          </Stack>        
        </Grid>


      </Grid>



   



</AdminLayout>


  )
}

export default DetallesCajaPage