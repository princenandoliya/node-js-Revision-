import mongoose from "mongoose";

class HttpError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

export default HttpError