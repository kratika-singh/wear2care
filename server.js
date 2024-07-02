import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

// configure env
dotenv.config();
// rest object
const app = express();

// rest api
app.get('/',(req,res) =>{
    res.send({
        message:'Welcome to wear2care'
    })
})
// PORT
const PORT = process.env.PORT;

//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white)
})