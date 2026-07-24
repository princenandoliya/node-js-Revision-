class HttpError extends Error{
    constructor(message,StatusCode){

        this.StatusCode = StatusCode
    }
}

export default HttpError