import type {NextPage} from 'next';
import { Card, CardContent, Grid, Typography, Divider, Box, Button, TextField, Stack, FormControl, InputLabel, Select, MenuItem, Chip } from '@mui/material';

import { MlineLayout } from '../../components/layouts';



const FormuEnvio:NextPage=()=>{
return (
  <MlineLayout titulo={'M-line App -Envio'} paginaDescripcion={'M-line su aplicacion de envios y recibos de dinero'}>
    <Typography variant='h1' component='h1'>Cajero Movil</Typography>
    <Typography variant='h2' sx={{mb:1}}>Enviar dinero Movil</Typography>

{/* SECCION DE ENVIOS */}
<Grid container spacing={2}>
  <Grid item xs={8} sm={6} >
    <Card className='summary-card' >
      <CardContent>
        <Typography variant='h2'>Remitente</Typography>
        <Divider sx={{my:1}}></Divider>
          {/* FORMILARIO REMITENTE */}
          <Stack spacing={2}>

            <Grid item xs={12}>
                  <TextField size="small" label="Nombre completo" variant='filled' fullWidth />
            </Grid>
              <Stack spacing={2} direction='row'>
                <Grid item xs={12}>
                  <TextField size="small" label="Telefono" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControl size="small" fullWidth>
                        <InputLabel>LA RED</InputLabel>
                        <Select variant='filled' labelId='Pais' value={1} >
                            <MenuItem value={1}>MTN</MenuItem>
                            <MenuItem value={1}>OrangeMoney</MenuItem>
                            <MenuItem value={1}>CashF</MenuItem>
                                            
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField size="small" label="Monto" variant='filled' fullWidth />
                </Grid> 
              </Stack>
              <Divider sx={{my:1}}></Divider>

              <Stack spacing={1} direction='row'>
                <Typography variant="h2" component="div">
                  Caja: <Chip label="Chip NL.SL" color="primary" variant="outlined" /> 
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
                  <TextField size="small" label="Telefono" variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12}>
               <Stack direction='row' spacing={1}>
                      <TextField size="small" label="Nombre completo" variant='filled' fullWidth />     
                      <TextField size="small" disabled label="Parter ID" variant='filled' fullWidth />
               </Stack>  
            </Grid>
            <Grid item xs={12}>
               <Stack direction='row' spacing={2}>
                  <FormControl size="small" fullWidth>
                    <InputLabel>Pais origen</InputLabel>
                    <Select variant='filled' labelId='Pais' value={1} >
                        <MenuItem value={1}>Guinea Ecuatorial</MenuItem>
                        <MenuItem value={1}>Camerun</MenuItem>
                        <MenuItem value={1}>Gabon</MenuItem>
                                        
                    </Select>
                  </FormControl>

                  <FormControl size="small" fullWidth>
                    <InputLabel>Pais destino</InputLabel>
                    <Select variant='filled' labelId='Pais' value={1} >
                        <MenuItem value={1}>Camerun</MenuItem>
                        <MenuItem value={1}>Guinea Ecuatorial</MenuItem>
                        <MenuItem value={1}>Gabon</MenuItem>
                                        
                    </Select>
                  </FormControl>
                  
                  <TextField size="small" disabled label="Comision" variant='filled' fullWidth />
                 
                </Stack>

            </Grid>

            <Box sx={{mt:2}}>
              <Button color="secondary" variant="contained" className='circular-btn' fullWidth>
                Enviar ahora
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

export default FormuEnvio

