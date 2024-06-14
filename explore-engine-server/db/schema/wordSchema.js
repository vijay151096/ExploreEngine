const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    word: {
        type: String,
        index: true,
        require: true
    },
    type: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = wordSchema;
