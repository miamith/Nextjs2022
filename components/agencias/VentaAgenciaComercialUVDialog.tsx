import React from "react";
import { useContext} from "react";
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { UIContext } from "../../context"
import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField, Divider } from '@mui/material';
import { SaveOutlined } from "@mui/icons-material";

export const VentaAgenciaComercialUVDialog =()=> {

  const {isVentaAgenciaComercialUVDialogOpen,
         toggleVentaAgenciaComercialUDialog} = useContext( UIContext );
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');


  return (
    <div >
       <Dialog
        open={ isVentaAgenciaComercialUVDialogOpen }
        onClose={toggleVentaAgenciaComercialUDialog}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Nueva Venta De Agencia a Comercial </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
        <Grid container spacing={2}>
   
               
                <Grid item xs={6}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Agencia</InputLabel>
                    <Select variant='filled' label='Agencia' value={1} >
                        <MenuItem value={1}>AIREPI</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Cuenta Agencia" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Monto" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Numero" variant='filled' disabled fullWidth />
               </Grid>

               <Grid item xs={12}>
                   <Divider></Divider>
               </Grid>
               <Grid item xs={6}>
                  <FormControl fullWidth size='small' disabled>
                    <InputLabel>Operacion</InputLabel>
                    <Select variant='filled' label='peracion' value={1} >
                        <MenuItem value={1}>Restitucion UV</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>

               <Grid item xs={6}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Pais beneficiario</InputLabel>
                    <Select variant='filled' label='Pais beneficiario' value={1} >
                        <MenuItem value={1}>GUINEA ECUA</MenuItem>
                        <MenuItem value={2}>Restitucion Agencia UV</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Divisa" variant='filled' disabled fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Realizado por" variant='filled' disabled fullWidth />
               </Grid>
               <Grid item xs={6}>

                   <FormControlLabel disabled
                   value="start"
                   control={<Switch color="secondary" />}
                   label="Cerraduras"
                   labelPlacement="start"
                   />
               </Grid>
               <Grid item xs={6}>

                   <FormControlLabel disabled
                   value="start"
                   control={<Switch color="secondary" />}
                   label="Controlada"
                   labelPlacement="start"
                   />
               </Grid>

   
         </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleVentaAgenciaComercialUDialog}>Cancel</Button>
          <Button
             sx={{ ml: 1, }}
             color="secondary"
             startIcon={ <SaveOutlined /> }
             href='/admin/supervisor/NuevoBancoCentral'
             
             >
              Confirmar
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}