import React, {useState} from 'react'
import { AddchartOutlined, CheckCircleOutlineOutlined, DeleteOutlined, FilterAltOutlined, LocalPrintshopOutlined, LockOpenOutlined, LockPersonOutlined, SearchOutlined,  } from '@mui/icons-material';
import { Box, FormControlLabel, Grid, Switch, TextField, FormControl, InputLabel, Select, MenuItem, Stack, Divider, Chip, Input, Button, IconButton, InputAdornment } from '@mui/material';


import { AdminLayout } from '../../../components/layouts';
import { Space,DatePicker } from 'antd';



const DetallesOperacionesRetiroEfectivoPage = () => {
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
    titulo={' Detalles Operacion Retiro Efectivo'} 
    subtitulo={'Detalles de una operacion de retiro de efectivo'}
    icon={<AddchartOutlined/>}
     >
       
      
        {/* BOTONES DE ACCION  Y FILTROS*/}
        <Box  display='flex' justifyContent='end' sx={{ mb: 1,mt:2 }}>
                                
                                          
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

                         <IconButton color="primary" aria-label="Imprimir" size="small">
                         <LocalPrintshopOutlined fontSize="small"/>
                         </IconButton>
                                   
                    </Box>
      <Grid container spacing={2} justifyContent='center'>

       <Grid item xs={5}>
           <Stack spacing={2} >
                <Grid item xs={12}>
                    <TextField size="small" label="Receptor" variant='filled' fullWidth />
                </Grid>                    
             </Stack>
       </Grid>

        <Grid item xs={5} > 
          <Stack spacing={2}>
                <Grid item xs={12}>
                    <TextField size="small" label="Monto" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Comision" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Comision de caja" variant='filled' fullWidth />
                </Grid>

          </Stack>        
        </Grid>

            <Grid item xs={12}>
                 <Divider> <Chip label="TRANSACCIONES" color='primary' /> </Divider>  
            </Grid>
           
        <Grid item xs={5} >
        
           <Stack spacing={2}>
                <Grid item xs={12}>
                    <TextField size="small" label="Cajera" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Fecha transaccion" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Dinero" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Numero" variant='filled' fullWidth />
                </Grid>
             </Stack>

        </Grid>

        <Grid item xs={5} >        
           <Stack spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Pais beneficiario</InputLabel>
                    <Select variant='filled' labelId='Pais beneficiario' value={1} >
                        <MenuItem value={1}>Guinea Ecuatorial</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Cuenta asociada" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Tipo de transaccion</InputLabel>
                    <Select variant='filled' labelId='Tipo de transaccion' value={1} >
                        <MenuItem value={1}>Dispositivo movil</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Realizado por" variant='filled' fullWidth />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="Controlada"
                    labelPlacement="start"
                    />
                    <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="Cerraduras"
                    labelPlacement="start"
                    />
                </Grid>
             </Stack>

        </Grid>

      </Grid>

   



</AdminLayout>


  )
}

export default DetallesOperacionesRetiroEfectivoPage