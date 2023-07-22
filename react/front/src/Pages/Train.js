import React,{useState} from 'react';
import Navbar from "./../Components/Navbar"
import { TextField,Stack,Button,Card,CardActionArea,CardContent,Typography } from '@mui/material';
import axios from 'axios';
function Train(props) {
    const [trainNumber,setTrainNumber] = useState("")
    const [train,setTrain] = useState({})
    const handleSubmit =async()=>{
        const response = await axios.get(`http://localhost:5000/train/${trainNumber}`)
        console.log(response.data)
        setTrain(response.data)
    }
    return (
        <div>
            <Navbar/>
            <Stack style={{margin:"40px"}}>
            <TextField onChange={(e)=>setTrainNumber(e.target.value)} style={{margin:"10px"}} id="filled-basic" label="train number" variant="filled" fullWidth/>
            <Button onClick={handleSubmit} variant="contained">search</Button>
            </Stack>
            {(train)?
            <Card sx={{ maxWidth: 345 }} style={{margin:"10px"}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {train.trainName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   train number  {train.trainNumber}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>:""
}
        </div>
    );
}

export default Train;