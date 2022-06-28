import { Button } from '@mui/material';

const Btn = ({color, text, onClick}) => {
  

  return (
  
        <Button variant='contained' onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</Button>

  )
}

export default Btn