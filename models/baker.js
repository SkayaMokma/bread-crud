const mongoose = require('mongoose')

const bakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
    
}, {
    toJSON: { virtuals: true}
})

bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

module.exports = mongoose.model('Baker', bakerSchema)