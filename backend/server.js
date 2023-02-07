const dotenv = require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT||5000
const connectDB = require('./config/connectDB')
const mongoose =require('mongoose'); 
const Task = require('./models/taskModel');
const taskRoutes = require('./routes/taskRoute');
const cors = require("cors")


const app = express();

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors({
  origin:["http://localhost:3000/",]
}))
app.use("/api/tasks",taskRoutes);

app.get('/',(req,res)=>{
  res.send("HIIIII")
})



mongoose  
     .connect(process.env.MONGO_URI)
     .then(()=>{
      app.listen(PORT,()=>{
      console.log(`Server running on port ${PORT}`)
     }) 
    })
    .catch((err)=> console.log(err))

