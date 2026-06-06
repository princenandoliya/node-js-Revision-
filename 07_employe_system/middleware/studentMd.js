// class HttpError extends Error{
//     constructor(message,statusCode){
//         super(message)
//         this.statusCode = statusCode
//     }   

// }

// export default HttpError

class HttpError extends Error{
    constructor(message,stastuCode){
        super(message)
        this.stastuCode = stastuCode
    }
}

export default HttpError