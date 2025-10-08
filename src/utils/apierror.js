// for handling the errors  
// go to npm node.js erros 

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Somethig went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.error = error

       //which files there are errors
        if(stack){
            this.stack = stack
        }else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}