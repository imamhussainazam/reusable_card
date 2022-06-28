import React, { useState } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import Card from "@mui/material/Card";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const CardComponent = ({card, onDelete, onCopy, onEdit}) => {
  

const Eventstyle={
  cursor:"pointer",
  outline:"none",
  border:"none",
  backgroundColor: "Transparent"
};

const infostyle={
  margin: "auto 0",
    marginBottom: "1rem",
    marginTop: "1rem"

}

  const CardStyle = {
    width: "40%",
    margin: "0 auto",
    marginBottom: "1rem",
    marginTop: "1rem",
    borderRadius:"15px",
    backgroundColor:"#dceae5"
  };
  const [edate, setEdate] = React.useState(new Date(card.end_date));

  const handleDChange = (newValue) => {
    setEdate(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [nid, setNid] = useState(card.id)
  const [nbudget, setNbudget] = useState(card.budget)
//   const dispatch=useDispatch();
//   const onEdit=(nid,nbudget)=>{
//     setOpen(false);
//     const previd=card.id;
//     card.id = nid;
//     const prevbudget=card.budget;
//     card.budget=nbudget;
//     dispatch(update({previd,nid,prevbudget,nbudget}))
// };
  
  
  return (
    <Card sx={{ minWidth: 275 }} elevation={5} style={CardStyle}>
      <div className="upper" style={{display:"flex",flexDirection:"column", padding:"10px 30px"}}>
        <div style={infostyle}>Card Name: Project {nid}</div>
        <div style={infostyle}>Project Budget: {nbudget}</div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <span>Project End Date: </span>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Closing"
              value={edate}
              onChange={handleDChange}
              renderInput={(params) => <TextField size="small" {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <hr style={{backgroundColor:"purple", height:"3px"}}/>
      <div className="lower" style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 30px"}}>
        <button className="edit" style={Eventstyle} onClick ={handleClickOpen}>Edit Card</button>


        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Card</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter new project ID and Budget 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            // id="id"
            value={nid}
            onChange={(e)=>setNid(e.target.value)}
            label="New ID"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            // id="budget"
            value={nbudget}
            onChange={(e)=>setNbudget(e.target.value)}
            label="New Budget"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{onEdit(card.id,nid,card.budget,nbudget);setOpen(false)}}>Save</Button>
        </DialogActions>
      </Dialog>

        <button className="delete" style={Eventstyle} onClick ={()=>onDelete(card.id)}>Delete Card</button>
        <button className="copy" style={Eventstyle} onClick ={()=>onCopy(card.id)}>Copy Card</button>
      </div>
    </Card>
  );
};

export default CardComponent;