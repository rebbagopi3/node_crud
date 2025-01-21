import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './dbconfig/mongodb.js';
import studentRoutes from "./routes/studentRoutes.js";

//app config
const app = express();

const port = process.env.PORT || 4000
connectDB()
//mddleware 
app.use(express.json())
app.use(cors())

//api endpoints
app.get('/',(req,res) =>{
    res.send('api working..rg')
})
app.use("/api", studentRoutes);

app.listen(port,() =>{
    console.log(`server running on ${port}`);
});