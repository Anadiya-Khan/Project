class ApiResponse {
    constructor(statusCode , data , message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export {ApiResponse}
// status codes 
// info - 100 -199
// success - 200 - 299
// redurection - 300 - 399
// client - 400 - 499
// server - 500 - 599