import type {NextPage} from 'next';
import { Card, CardContent, Grid, Typography, Divider, Box, Button, TextField, Stack, FormControl, InputLabel, Select, MenuItem, Chip, InputBase, IconButton, Paper } from '@mui/material';

import { MlineLayout } from '../../components/layouts';
import { Directions, Search } from '@mui/icons-material';



const FormuRecibir:NextPage=()=>{
return (
  <MlineLayout titulo={'M-line App -Recibir'} paginaDescripcion={'M-line su aplicacion de envios y retiros de dinero'}>
    <Typography variant='h1' component='h1'>Cajero</Typography>
    <Typography variant='h2' sx={{mb:1}}>Recibir dinero</Typography>

{/* SECCION DE ENVIOS */}
<Grid container spacing={2}>
  <Grid item xs={8} sm={6} >
    <Card className='summary-card' >
      <CardContent>
        <Typography variant='h2'>Datos envio</Typography>
        <Divider sx={{my:1}}></Divider>
          {/* FORMILARIO REMITENTE */}
          <Stack spacing={2}>

            <Grid item xs={12}>
              <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto' }}
                    >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                    </IconButton>
                    <InputBase
                        color='info'
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Buscar codigo envio"
                        inputProps={{ 'aria-label': 'Buscar codigo envio' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <Search />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="secondary" sx={{ p: '10px' }} aria-label="directions">
                        <Directions />
                    </IconButton>
              </Paper>
            </Grid>
              <Stack spacing={2} direction='row'>
                <Grid item xs={12}>
                      <TextField label="Código secreto" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Monto" variant='filled' fullWidth />
                </Grid> 
              </Stack>
              <Divider sx={{my:1}}></Divider>

              <Stack spacing={1} direction='row'>
                <Typography variant="h2" component="div">
                  Caja: <Chip label="NL.SL" color="primary" variant="outlined" /> 
                </Typography>
                <Typography variant="h2" component="div"> 
                  Saldo: <Chip label="8.000 XAF" color="primary" variant="outlined" />
                </Typography>
              

                <Typography variant="h2" component="div">
                  A cobrar: <Chip label="5.000XAF" color="primary" variant="outlined" /> 
                </Typography>
                <Typography variant="h2" component="div"> 
                  Comision caja: <Chip label="8.000 XAF" color="primary" variant="outlined" />
                </Typography>
              </Stack>
              
          </Stack>



      </CardContent>

    </Card>

    
  </Grid>

  <Grid item xs={8} sm={6} >
    <Card className='summary-card' >
      <CardContent>
        <Typography variant='h2'>Receptor</Typography>
        <Divider sx={{my:1}}></Divider>
          {/* FORMILARIO REMITENTE */}
          
          <Stack spacing={2}>
            <Grid item xs={12}>
                  <TextField label="Nombre completo" variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12}>
               <Stack direction='row' spacing={1}>
                      <TextField label="Numero de telefono" variant='filled' fullWidth />     
                      <TextField label="Nº Documento" variant='filled' fullWidth />
               </Stack>  
            </Grid>
            <Grid item xs={12}>
                  <TextField disabled label="Comision" type='number' variant='filled' fullWidth />
            </Grid>

            <Box sx={{mt:2}}>
              <Button color="secondary" variant="contained" className='circular-btn' fullWidth>
                Pagar ahora
              </Button>
            </Box>
        </Stack>
      </CardContent>

    </Card>

    
  </Grid>

  
</Grid>

  </MlineLayout>
)
}

export default FormuRecibir

