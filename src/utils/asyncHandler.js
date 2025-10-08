const asyncHandler = (requestHandler) => {
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err) => next(err))
    }
}

export {asyncHandler}
// two ways try catch and promises


//higher order functions are the function treat as parameters and can return 


// const asyncHandler = () => {}
// const asyncHandler = (func) => (() => {})
// const asyncHandler = (func) => async() => {}

// const asyncHandler = (fn) => async(req,res,next) => {
//      try{
//          await fn(req,res,next)  // just a wrapper function 
//      }catch(error){
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//      }
// }


