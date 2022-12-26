import React from "react";
import { useContext} from "react";
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { UIContext } from "../../context"
import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Stack, Switch, TextField } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";

export const NuevoPaisDialog =()=> {
    const {isNuevoPaisDialogOpen, toggleNuevoPaisDialog} = useContext( UIContext );
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');


  return (
    <div>
       <Dialog
        open={ isNuevoPaisDialogOpen }
        onClose={toggleNuevoPaisDialog}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Nuevo pais</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
        <Grid container spacing={2}>
   
               <Grid item xs={6}>
                   <TextField size="small" label="Nombre" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Codigo" variant='filled'  fullWidth />
               </Grid>
               <Grid item xs={6}>
                 <FormControl fullWidth size='small'>
                    <InputLabel>Codificacion</InputLabel>
                    <Select variant='filled' labelId='Codificacion' value={1} >
                        <MenuItem value={1}>FCFA</MenuItem>                 
                    </Select>
                  </FormControl>
               </Grid>
               
               <Grid item xs={6}>
               <FormControl fullWidth size='small'>
                    <InputLabel>Pais</InputLabel>
                    <Select variant='filled' labelId='pais' value={1} >
                        <MenuItem value={1}>GUINEA ECUATORIAL</MenuItem>                 
                    </Select>
                  </FormControl>
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Limite envio" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                   <TextField size="small" label="Limite recepcion" variant='filled' fullWidth />
               </Grid>
               <Grid item xs={6}>
                  <FormControl fullWidth size='small'>
                    <InputLabel>Partner API</InputLabel>
                    <Select variant='filled' label='Partner API' value={1} >
                        <MenuItem value={1}>INTOUCH</MenuItem>                 
                    </Select>
                  </FormControl>
                </Grid>
               <Grid item xs={6}>
                   <FormControlLabel
                   value="start"
                   control={<Switch color="secondary" />}
                   label="Activo"
                   labelPlacement="start"
                   />
               </Grid>
               <Grid item xs={6}>
                   <FormControlLabel
                   value="start"
                   control={<Switch color="secondary" />}
                   label="Activo SMS"
                   labelPlacement="start"
                   />
               </Grid>
               <Grid item xs={6}>
                   <FormControlLabel
                   value="start"
                   control={<Switch color="secondary" />}
                   label="Activo Validacion"
                   labelPlacement="start"
                   />
               </Grid>
   
         </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleNuevoPaisDialog}>Cancel</Button>
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