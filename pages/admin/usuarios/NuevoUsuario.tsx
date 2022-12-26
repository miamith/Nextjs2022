import React from 'react'
import { DeleteOutlined, KeyOutlined, PinOutlined, SaveOutlined, SupervisedUserCircleOutlined } from '@mui/icons-material';
import { Box, Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';

const NuevoUsuarioPage = () => {
  return (

    <AdminLayout 
    titulo={' Nuevo Usuario'} 
    subtitulo={'Creacion de un nuevo usuario'}
    icon={<SupervisedUserCircleOutlined/>}
     >
              {/* BOTONES DE ACCION  Y FILTROS*/}
      <Box  display='flex' justifyContent='end' sx={{ mb: 0, }}>
                    
                    <Button 
                        sx={{ mr: 2, }}
                        color="secondary"
                        startIcon={ <SaveOutlined /> }
                        href='/admin/usuarios/guardar'
                        >
                        Guardar
                    </Button>
                    <Button 
                                        
                        sx={{ mr: 2, }}
                        color="warning"
                        startIcon={ <KeyOutlined /> }
                        href='/admin/supervisor/nuevo'
                        >
                        Reiniciar contraseña
                    </Button>
                    <Button
                        color="error"
                        startIcon={ <DeleteOutlined /> }
                        href='/admin/usuarios/borrar'
                        >
                        Borrar
                    </Button>
      </Box>

      <Grid container spacing={1} sx={{mt:0}}>

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
            <FormControlLabel
            value="start"
            control={<Switch color="secondary" />}
            label="Reiniciar contraseña"
            labelPlacement="start"
            />
        </Grid>
        <Grid item xs={12}>
            <TextField size="small" label="Numero" variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12}>
            <TextField size="small" label="Gsm" variant='filled' fullWidth />
        </Grid>        
        
      </Grid>

    </AdminLayout>


  )
}

export default NuevoUsuarioPage