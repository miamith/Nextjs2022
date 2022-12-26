import React from 'react'
import { AdminLayout } from '../../components/layouts';
import { AccessTimeOutlined, AccountBalanceOutlined, AddHomeWorkOutlined, AssignmentReturnedOutlined, CleanHandsOutlined, DashboardOutlined, GroupAddOutlined, LocalOfferOutlined, MoneyOutlined, SendOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { ResumenTitulo } from '../../components/admin/ResumenTitulo';

const DashboardPage = () => {
  return (
  
    <AdminLayout 
        titulo={' Resumen'} 
        subtitulo={'Estadisticas generales'}
        icon={<DashboardOutlined/>}
    >

      <Grid container spacing={2}>

        <ResumenTitulo 
          titulo={234} 
          subtitulo={'Agencias totales'} 
          icon={<AddHomeWorkOutlined color='secondary' sx={{fontSize:40}}/>} 
          />
        <ResumenTitulo 
          titulo={560} 
          subtitulo={'Cuentas totales'} 
          icon={<CleanHandsOutlined color='success' sx={{fontSize:40}}/>} 
          />
        <ResumenTitulo 
          titulo={120} 
          subtitulo={'Cajas totales'} 
          icon={<AccountBalanceOutlined color='error' sx={{fontSize:40}}/>} 
          />
        <ResumenTitulo 
          titulo={120} 
          subtitulo={'Total clientes'} 
          icon={<GroupAddOutlined color='primary' sx={{fontSize:40}}/>} 
          />
        <ResumenTitulo 
          titulo={'500.000'} 
          subtitulo={'Total comisiones'} 
          icon={<MoneyOutlined color='warning' sx={{fontSize:40}}/>} 
          />
          <ResumenTitulo 
          titulo={'200.000'} 
          subtitulo={'Total envios'} 
          icon={<SendOutlined color='success' sx={{fontSize:40}}/>} 
          />
          <ResumenTitulo 
          titulo={'100.000'} 
          subtitulo={'Total retiros'} 
          icon={<AssignmentReturnedOutlined color='error' sx={{fontSize:40}}/>} 
          />
          <ResumenTitulo 
          titulo={'100.000'} 
          subtitulo={'IVA total'} 
          icon={<LocalOfferOutlined color='warning' sx={{fontSize:40}}/>} 
          />
            <ResumenTitulo 
          titulo={'100.000'} 
          subtitulo={'Total comision PROD'} 
          icon={<MoneyOutlined color='primary' sx={{fontSize:40}}/>} 
          />
          <ResumenTitulo 
          titulo={7} 
          subtitulo={'Actualizacion en'} 
          icon={<AccessTimeOutlined color='secondary' sx={{fontSize:40}}/>} 
          />
      </Grid>

    </AdminLayout>


  )
}

export default DashboardPage