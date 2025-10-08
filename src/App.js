import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// use is a middleware
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
})) 

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended : true,limit:"16kb"})) // extended (object inside object) speacial symbols 
app.use(express.static("public")) // fixed files 
app.use(cookieParser())  // for cookies remember 




export {app}