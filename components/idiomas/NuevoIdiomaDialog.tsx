import React from "react";
import { useContext} from "react";
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { UIContext } from "../../context"
import {  Grid, TextField } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";



export const NuevoIdiomaDialog =()=> {
    const {isIdiomaDialogOpen, toggleNuevoIdiomaDialog} = useContext( UIContext );
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');


  return (
    <div >
       <Dialog
        open={ isIdiomaDialogOpen }
        onClose={toggleNuevoIdiomaDialog}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Nuevo idioma</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
        <Grid container >
   
               <Grid item xs={12}>
                   <TextField size="small" label="Nombre *" variant='filled' fullWidth />
               </Grid>
         </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleNuevoIdiomaDialog}>Cancel</Button>
          <Button
             sx={{ ml: 1, }}
             color="secondary"
             startIcon={ <SaveOutlined /> }
             href='#'
             
             >
              Guardar
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}