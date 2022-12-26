import React from "react";
import { useContext} from "react";
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { UIContext } from "../../context"
import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";

export const NuevaVentaAgenciaUVDialog =()=> {
    const {isNuevaVentaAgenciaUVDialogOpen, toggleNuevaVentaAgenciaUDialog} = useContext( UIContext );
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');


  return (
    <div >
       <Dialog
        open={ isNuevaVentaAgenciaUVDialogOpen }
        onClose={toggleNuevaVentaAgenciaUDialog}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Vender o Restituir UV</DialogTitle>
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
                   <TextField size="small" label="Numero" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Operacion</InputLabel>
                    <Select variant='filled' label='peracion' value={1} >
                        <MenuItem value={1}>Venta Agencia UV</MenuItem>
                        <MenuItem value={2}>Restitucion Agencia UV</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Cuenta asociada" variant='filled' disabled fullWidth />
               </Grid>
               
               <Grid item xs={6}>
                   <TextField size="small" label="Valor" variant='filled' fullWidth />
               </Grid>
   
         </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleNuevaVentaAgenciaUDialog}>Cancel</Button>
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