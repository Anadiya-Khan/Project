import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// for query aggregation use as plugin  


const videoSchema = new Schema({
    videoFile:{
        type : String,    //cloudinary url
        required : true
    },
    thumbnail:{
        type : String,
        required : true
    },
    owner:{
       type : mongoose.Schema.Types.ObjectId,
       ref : "User"
    },
    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    duration:{
        type : Number,
        required : true
    },
    views : {
        type : Number,
        required : true
    },
    isPublished: {
        type : Boolean,
        required : true
    },
    
},{timestamps : true})

videoSchema.plugin(mongooseAggregatePaginate) // own plugins 

export const Video = mongoose.model("Video",videoSchema)

// bcrypt vs bcrypt.js
// hash your password 
// jwt.io web for jwt ek bearer token h (key) data send karega 00000000000000000000000000
