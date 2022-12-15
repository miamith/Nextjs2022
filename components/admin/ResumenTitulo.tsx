
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { FC } from 'react';


interface Props {
    titulo: string | number;
    subtitulo: string;
    icon:JSX.Element


}

export const ResumenTitulo:FC<Props> = ({titulo,subtitulo,icon}) => {
  return (
   
    <Grid item xs={12} sm={4} md={3}>
    <Card sx={{display:'flex'}}>
      <CardContent sx={{ width:50, display:'flex', justifyContent:'center', alignItems:'center'}}>
        {icon}
      </CardContent>
      <CardContent sx={{flex:'1 0 auto', display:'flex', flexDirection:'column'}}>
        <Typography variant='h3'>{titulo}</Typography>
        <Typography variant='caption'>{subtitulo}</Typography>
      </CardContent>
     </Card>
    </Grid>

  )
}
