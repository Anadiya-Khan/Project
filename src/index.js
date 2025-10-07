import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
    path : "./.env"
})

connectDB()

/*
;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log("DataBase connected")
        app.on("error",(error)=>{
            console.log("Error",error)
            throw error
        })
        app.listen(process.env.PORT,() =>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch(error){
       console.log("Error Connection failed",error)
       throw error
    }
})()
*/