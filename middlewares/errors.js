import ErrorHandler from '../utils/errorHandler'

export default (err, req, res, next)=> {
    err.statusCode = err.statuscode || 500

    let error = {...err}

    error.message = err.message

    // Wrong Mongoose Object Id Error
    if(err.name === 'CastError') {
        const message = `Resource Not Found. Invalid: ${err.path}`
        error = new ErrorHandler(message, 400)
    }

    // Handling mongoose Validation error

    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(value=>value.message);
        error = new ErrorHandler(message, 400)
    }

    res.status( err.statusCode).json({
        success: false,
        error,
        message: error.message,
        stack: error.stack
    })
}