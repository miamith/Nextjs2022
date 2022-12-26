import React, {useState} from 'react'
import { AccountBalanceOutlined, AddchartOutlined, AddHomeWorkOutlined, AddOutlined, ArrowCircleDownOutlined, CurrencyExchangeOutlined, DeleteOutlined, SaveOutlined } from '@mui/icons-material';
import { Box, Button, FormControlLabel, Grid, Switch, TextField, CardContent, Card, FormControl, InputLabel, Select, MenuItem, Stack, Divider, Tab, Link, Chip } from '@mui/material';


import { AdminLayout } from '../../../components/layouts';



const DetallesOperacionPage = () => {

    const [value, setValue] = React.useState('1');
    
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

  return (

    <AdminLayout 
    titulo={' Detalles Operacion'} 
    subtitulo={'Detalles de una operacion'}
    icon={<AddchartOutlined/>}
     >
       
      
       <Box  display='flex' sx={{ mt: 2, }}> </Box>
      <Grid container spacing={2} justifyContent='center'>

       <Grid item xs={12}>
         
           <Stack spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Agencia</InputLabel>
                    <Select variant='filled' labelId='Cuenta Agencia' value={1} >
                        <MenuItem value={1}>COMERCIAL GOUNDE</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Cuenta de Agencia</InputLabel>
                    <Select variant='filled' labelId='Cuenta de Agencia' value={1} >
                        <MenuItem value={1}>Agencia Caja venta UV</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Monto" variant='filled' fullWidth />
                </Grid>

             </Stack>

        </Grid>

            <Grid item xs={12}>
                 <Divider> <Chip label="TRANSACCIONES" color='primary' /> </Divider>  
            </Grid>
           
        <Grid item xs={5} >
        
           <Stack spacing={2}>
                <Grid item xs={12}>
                    <TextField size="small" label="Fecha transaccion" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Numeo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Pais beneficiario</InputLabel>
                    <Select variant='filled' labelId='Pais beneficiario' value={1} >
                        <MenuItem value={1}>Guinea Ecuatorial</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Dinero" variant='filled' fullWidth />
                </Grid>
             </Stack>

        </Grid>

        <Grid item xs={5} >        
           <Stack spacing={2}>
                <Grid item xs={12}>
                    <TextField size="small" label="Cuenta asociada" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField size="small" label="Tipo de transaccion" variant='filled' fullWidth />
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

export default DetallesOperacionPage