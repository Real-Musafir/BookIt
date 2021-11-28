const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please  enter room name'],
        trim: true,
        maxLength: [100, 'Room name cannot exceed 100 characteers']
    },
    pricePerNight: {
        type: Number,
        required: [true, 'Please enter room price per night'],
        maxLength: [100, 'Room price cannot exceed 5 characteers'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please  enter room description'],
    },
    address: {
        type: String,
        required: [true, 'Please  enter room address'],
    },
    guestCapacity: {
        type: Number,
        required: [true, 'Please  enter room capacity'],
    },
    numOfBeds: {
        type: Number,
        required: [true, 'Please  enter number of beds in room'],
    },
    internet: {
        type: Boolean,
        default: false
    },
    breakfast: {
        type: Boolean,
        default: false
    },
    airConditioned: {
        type: Boolean,
        default: false
    },
    petsAllowed: {
        type: Boolean,
        default: false
    },
    roomCleaning: {
        type: Boolean,
        default: false
    },
    ratings: {
        type: Number,
        default: 0
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Plese enterd the room category'],
        enum: {
            values: [
                'King',
                'Single',
                'Twins'
            ],
            message: 'Please select correct category for room'
        }
    },
    reviews: [
            {
                user: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'User',
                    required: true
                },
                name: {
                    type: String,
                    required:true
                },
                rating: {
                    type: String,
                    required: true
                },
                comment: {
                    type: String,
                    required: true
                },
            }
            
        ],
    
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: false
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    
})


module.exports =  mongoose.models.Room || mongoose.model('Room', roomSchema)