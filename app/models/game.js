const mongoose = require('mongoose')
const runSchema = require('./run')

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    runs: [runSchema],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)