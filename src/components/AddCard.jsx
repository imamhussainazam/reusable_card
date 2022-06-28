import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/CardRedux';
const AddCard = () => {
    const [id, setId] = useState()
    const [budget, setBudget] = useState()
    const [date, setDate] = useState(new Date())
    const dispatch=useDispatch();

    const handleAdd = (e)=> {
        e.preventDefault()
        console.log(date)
        if(!budget || !id){
          alert("Please add the fields")
          return
      }
        const end_date=date;
       dispatch(addProject({id,budget,end_date}))
        
        setId('')
        setBudget('')
        setDate(new Date())

    }
    const formstyle={
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"space-between"
    }
    const handleChange = (newValue) => {
      setDate(newValue);
    };
  return (
    <form className='add-form' style={formstyle}>
        <div className='form-control'>
            <label>Project Id</label>
            <input type='number' placeholder='Add Id' value={id} onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Budget</label>
            <input type='number' placeholder='Add Budget' value={budget} onChange={(e)=>setBudget(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Date and Time</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Closing"
              value={date}
              onChange={handleChange}
              renderInput={(params) => <TextField size='small' {...params} />}
            />
          </LocalizationProvider>
        </div>

        <input type='submit' onClick={handleAdd} className='btn btn-block' />
    </form>
  )
}

export default AddCard