import React from 'react'
import NextLink from 'next/link';
import { Box, Button, Grid, TextField, Typography, Link, Stack } from '@mui/material';
import { AuthLayout } from '../../components/layouts';

const RegistroPage = () => {
  return (
    <>

      <AuthLayout titulo={'Registrar'} >
        <Box sx={{ width:350, padding:'10px 20px' }}>
            <Grid container   spacing={2}  >
                <Grid item xs={12} >
                    <Typography variant='h1' component="h1">Crear Cuenta</Typography>
                </Grid>
                
                <Grid item xs={12} >
                    <TextField label="Nombre completo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} >
                    <TextField label="Usuario" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Contraseña" type="password" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button color='secondary' className='circular-btn' size='large' fullWidth>
                        Registrar
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                    <NextLink href={'./login'} passHref legacyBehavior>
                        <Link underline='always'>¿Ya tiene una cuenta?</Link>
                    </NextLink>             
                </Grid>
            </Grid>

        </Box>
      </AuthLayout>

    </>
  )
}

export default RegistroPage