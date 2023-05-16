const mongoose = require('mongoose')
const Bread = require('./bread')

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

bakerSchema.post('findOneAndDelete', async function() {
    await Bread.deleteMany({ baker: this._conditions._id })
})

bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

module.exports = mongoose.model('Baker', bakerSchema)