import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./../Components/Navbar"
import { Card, CardContent, Typography, CardActionArea } from "@mui/material/";
function Trains(props) {
  const [data, setData] = useState([]);
  const fetchTrains = async () => {
    const response = await axios.get("http://localhost:5000/trains");
    console.log(response.data);
    setData(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchTrains();
  });
  return (
    <div>
        <Navbar/>
      {data.map((train) => {
        return (
          <Card sx={{ maxWidth: 345 }} style={{margin:"10px"}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {train.trainName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   train number  {train.trainNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   train number  {train.trainNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   train seatsAvailable of sleeper : {train.seatsAvailable.sleeper}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                train seatsAvailable of AC : {train.seatsAvailable.AC}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   train price of sleeper : {train.price.sleeper}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                train price of AC : {train.price.AC}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                train Duration : {`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds} Hours`}
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}

export default Trains;
