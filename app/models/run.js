const mongoose = require('mongoose')

const runSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    goal: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Run', runSchema)