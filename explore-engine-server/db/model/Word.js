const mongoose = require('mongoose')
const wordSchema = require("../schema/wordSchema");

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;
