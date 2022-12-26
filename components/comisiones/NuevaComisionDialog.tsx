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

export const NuevaComisionDialog =()=> {
    const {isNuevaComisionDialogOpen, toggleNuevaComisionDialog} = useContext( UIContext );
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');


  return (
    <div >
       <Dialog
        open={ isNuevaComisionDialogOpen }
        onClose={toggleNuevaComisionDialog}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Nueva Comision</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
        <Grid container spacing={2}>
   
               <Grid item xs={6}>
                   <TextField size="small" label="Del Monto" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Al monto" variant='filled'  fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Comision" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Area" variant='filled'  fullWidth />
               </Grid>
                  
         </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleNuevaComisionDialog}>Cancel</Button>
          <Button
             sx={{ ml: 1, }}
             color="secondary"
             startIcon={ <SaveOutlined /> }
             href='/admin/'
             
             >
              Guardar
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}