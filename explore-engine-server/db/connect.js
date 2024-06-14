const mongoose = require('mongoose');
const Word = require("./model/Word");
const createConnection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/words");
        Word.createIndexes({word: 1});
        console.log("Mongo DB Connections Established on mongodb://localhost:27017");
    } catch (e) {
        console.error("Mongo DB Connectivity Failed");
    }
}

module.exports = {createConnection};
