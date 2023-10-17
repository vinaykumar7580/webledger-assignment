const express=require("express")
const cors=require("cors")
require("dotenv").config()

const app=express()

app.use(express.json())
app.use(cors())

app.listen(process.env.port, ()=>{
    console.log(`server is running on port ${process.env.port}`)
})