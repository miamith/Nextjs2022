import React from 'react'
import { AccountBalanceOutlined, ArrowCircleDownOutlined, DeleteOutlined, SaveOutlined } from '@mui/icons-material';
import { Box, Button, FormControlLabel, Grid, Switch, TextField } from '@mui/material';
import { AdminLayout } from '../../../components/layouts';

const NuevoBancoCentralPage = () => {
  return (

    <AdminLayout 
    titulo={' Nuevo Banco Central'} 
    subtitulo={'Creacion de un banco central'}
    icon={<AccountBalanceOutlined/>}
     >
              {/* BOTONES DE ACCION  Y FILTROS*/}
      <Box  display='flex' justifyContent='end' sx={{ mb: 0, }}>
                    
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

      <Grid container spacing={1} sx={{mt:0}}>

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
            <FormControlLabel
            value="start"
            control={<Switch color="secondary" />}
            label="No enviar SMS"
            labelPlacement="start"
            />
        </Grid>
        <Grid item xs={12}>
            <TextField size="small" label="Saldo de la cuenta" variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12}>
            <TextField size="small" label="Total saldo Admin" variant='filled' fullWidth />
        </Grid>
        
        
      </Grid>

    </AdminLayout>


  )
}

export default NuevoBancoCentralPage