
import React, { useState } from 'react';
import './App.css';
import { TextField,Stack,Button } from '@mui/material';


function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);


  const calculateBMI = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };
  const handleReset = ()=>{
    setBMI(0)
    setWeight(0)
    setHeight(0)
  }
  
  
  

  return (
    
    <div style={{height:'100vh'}} className='w-100 d-flex justify-content-center align-items-center bg-dark'>

    <div style={{width:'600px'}} className='bg-light p-5 rounded'>
     <h3>BMI Calculator</h3>
     <div style={{height:'150px'}} className="interest-card w-100 bg-secondary d-flex flex-column justify-content-center align-items-center rounded shadow
     mt-5  "> 

     <h1 className='me-2'>  {' '} {bmi} </h1>
     <p>BMI</p>


     </div>
     <form className="mt-5" >
       <div className="mb-3">
       <TextField className='w-100' id="outlined-basic1" label="Weight (Kg)" variant="outlined" value={weight || ""} name='weight' onChange={(e) => setWeight(e.target.value)} />
       </div>
      

       <div className="mb-3">
       <TextField className='w-100' id="outlined-basic2" label="Height (cm)" variant="outlined" value={height || ""} name='height' onChange={(e) => setHeight(e.target.value)}/>
       </div>
      

       
       <Stack direction="row" spacing={2}>
     
       <Button  onClick={calculateBMI} style={{height:'70px',width:'250px'}} variant="contained" disableElevation>Calculate</Button>
       <Button onClick={handleReset} style={{height:'70px',width:'250px'}} variant="outlined">reset</Button>

       </Stack>

      </form>
     </div>
   
   </div>
 );
}

export default App;