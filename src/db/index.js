import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log(`\n MongoDb connected congratulations !! DB Host ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("Error connection failed",error)
        process.exit(1)
    }
}

export default connectDB