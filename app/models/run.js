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
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = runSchema