import type {NextPage} from 'next';
import { Grid, Typography } from '@mui/material';
import { MlineLayout } from '../components/layouts';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage:NextPage=()=>{
return (
  <MlineLayout titulo={'M-line App -Home'} paginaDescripcion={'M-line su aplicacion de envios y recibos de dinero'}>
    <Typography variant='h1' component='h1'>Resumen</Typography>
    <Typography variant='h2' sx={{mb:1}}>Montos e informacion masiva resumida</Typography>

{/* SECCION DE ENVIOS */}
<Grid container spacing={4}>
  <Grid item xs={8} sm={6} >
    <Item>Remitente</Item>

    
  </Grid>

  <Grid item xs={8} sm={6} >
    <Item>Receptor</Item>

  </Grid>

  
</Grid>

  </MlineLayout>
)
}

export default HomePage

