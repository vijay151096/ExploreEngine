const express = require('express');
const Trie = require("../searchmodule/Trie");
const router = express.Router();

let wordsDB = [
    "apple", "banana", "orange", "pineapple", "grape",
    "cat", "dog", "bird", "fish",
    "red", "blue", "green", "yellow", "purple",
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "car", "bicycle", "motorcycle", "bus", "train", "plane",
    "house", "apartment", "condo", "villa",
    "coffee", "tea", "juice", "soda", "water",
    "football", "basketball", "soccer", "tennis", "golf",
    "computer", "phone", "tablet", "laptop", "smartwatch",
    "pizza", "burger", "sushi", "taco", "pasta",
];

router.get("/", (req, res) => {
    const searchText = req.query.search || '';

    const trie = new Trie();
    for (let word of wordsDB) {
        trie.insert(word.toLowerCase());
    }
    let wordsFiltered = trie.search(searchText.toLowerCase());
    res.status(200).json(wordsFiltered);
})

module.exports = router
