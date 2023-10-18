const express=require("express")
const cors=require("cors")
const axios=require("axios")
require("dotenv").config()

const app=express()

app.use(express.json())
app.use(cors())

app.post("/api/search", async(req,res)=>{
    const {text}=req.body
    
    try{
        let response=await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&query=${text}`)
       
        res.status(200).send(response.data.results)

    }catch(error){
        res.status(400).send(error)
    }

})

app.listen(process.env.port, ()=>{
    console.log(`server is running on port ${process.env.port}`)
})