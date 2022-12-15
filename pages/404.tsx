import { Box, Typography } from '@mui/material';
import { MlineLayout } from '../components/layouts'


const Custom404 = () => {
  return (
    <MlineLayout titulo={'Pagina no encontrada'} paginaDescripcion={'No hay nada que mostrar aqui'} >
        <Box 
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        height='calc(100vh - 200px)'
        sx={{ flexDirection: {sx:'colum',sm:'row'} }}
        >
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
            <Typography  marginLeft={2}>No encontramos ninguna pagina aqui</Typography>
        
        </Box>
    </MlineLayout>
  )
}

export default Custom404