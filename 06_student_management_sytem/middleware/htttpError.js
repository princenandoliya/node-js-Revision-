class HttpError extends Error{
    constructor(message,stastuCode){
        super(message)
        this.stastuCode = stastuCode
    }
}

export default HttpError;