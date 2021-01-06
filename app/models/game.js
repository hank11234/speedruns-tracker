const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    // speedruns: [speedrunSchema],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})