import React from "react";
import { useContext} from "react";
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { UIContext } from "../../context"
import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Stack, Switch, TextField } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";

export const NuevaCajaDialog =()=> {
    const {isDialogOpen, toggleNuevaCajaDialog} = useContext( UIContext );
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');


  return (
    <div >
       <Dialog
        open={ isDialogOpen }
        onClose={toggleNuevaCajaDialog}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Nueva Caja de Efectivo</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
        <Grid container spacing={2}>
   
               <Grid item xs={6}>
                   <TextField size="small" label="Numero" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Agencia" variant='filled' disabled  fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Nombre" variant='filled' fullWidth />
               </Grid>
               
               <Grid item xs={6}>
                   <TextField size="small" label="Transaccion total" variant='filled' disabled  fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Nombre Usuario" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Debito total" variant='filled' disabled  fullWidth />
               </Grid>
               <Grid item xs={6}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Pais de trabajo</InputLabel>
                    <Select variant='filled' label='Pais de trabajo' value={1} >
                        <MenuItem value={1}>GUINEA ECUATORIAL</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                   <TextField size="small" label="Credito total" variant='filled' disabled fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Gsm" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Saldo" variant='filled' disabled  fullWidth />
               </Grid>
               <Grid item xs={6}>

                   <FormControlLabel
                   value="start"
                   control={<Switch color="secondary" />}
                   label="Activa"
                   labelPlacement="start"
                   />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Comisiones totales" variant='filled' disabled  fullWidth />
               </Grid>
   
         </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleNuevaCajaDialog}>Cancel</Button>
          <Button
             sx={{ ml: 1, }}
             color="secondary"
             startIcon={ <SaveOutlined /> }
             href='/admin/supervisor/NuevoBancoCentral'
             
             >
              Guardar
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}