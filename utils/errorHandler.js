class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode

        // captureStackTrace it is the function of the error class that creates a
        // .statck property in our object whice is basically returns a string whice
        // represents a location of particular error in the code
    Error.captureStackTrace(this, this.constructor)

    }

}

export default ErrorHandler