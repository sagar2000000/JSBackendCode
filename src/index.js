// require('dotenv').config({path:'./env'})

// import mongoose from "mongoose"
// import { DB_NAME } from "./constants"

import dotenv from 'dotenv'
import connectDB from "./db/index.js"

dotenv.config({
  path:'./env'
})
connectDB()
.then(()=>{
  app.listen(process.env.PORT||8000,()=>{
    console.log("Server is running at: ",process.env.PORT)
  })
})
.catch((err)=>{
  console.log("Mongo DB connection failed",err)

})














// import express from "express"
// const app=express()


// ( async ()=>
  
//   {


//     try{
//       mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on('error',(error)=>{
//         console.log("Err",error)
//         throw error
//       })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening in port ${process.env.PORT}`)
//        })
//     }
//     catch(error){
//       console.log("Error",error)
//     }
//   })()