import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apierror.js"
import {User} from "../models/user.models.js"
import {uploadCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/apiresponse.js"

const registerUser = asyncHandler(async (req,res)=>{
       const {fullname,username,password,email} = req.body;
       if(fullname === ""){
              throw new ApiError(400,"fullname is required")
       }
       if(username === ""){
              throw new ApiError(400,"username is required")
       }
       if(password === ""){
              throw new ApiError(400,"password is required")
       }
       if(email === ""){
              throw new ApiError(400,"email is required")
       }
// first matching validation
      const existedUser =  User.findOne({
              $or : [{username},{email}]
       })

       if(existedUser){
              throw new ApiError(409,"User with email or username exits")
       }

       const avatarLocalPath = req.files?.avatar[0]?.path;
       const coverImagePath = req.files?.coverImage[0]?.path;

       if(!avatarLocalPath){
              throw new ApiError(400,"Avatar file is required")
       }

       const avatar = await uploadCloudinary(avatarLocalPath)
       const coverImage = await uploadCloudinary(coverImagePath)

       if(!avatar){
        throw new ApiError(400,"Avatar file is required")      
       }

// in another continent
       const user = await User.create({
              fullname,
              avatar:avatar.url,
              coverImage: coverImage?.url || "",  // if not then empty
              email,
              password,
              username : username.toLowerCase()

       })
       const createdUser = await User.findById(user._id).select(
              "-password -refreshToken"  // not include 
       ) // coming from mongoDB

       if(!createdUser){
              throw new ApiError(500,"Something went wrong while registering the user")
       }

       return res.status(200).json(
              new ApiResponse(200,createdUser, "User Registered Successfully")
       )


})

export {registerUser}