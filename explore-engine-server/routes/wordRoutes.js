const express = require('express');
const Trie = require("../searchmodule/Trie");
const Word = require("../db/model/Word");
const router = express.Router();
const fs = require('fs');
const wordsData = require("../db/data/words");

router.get('/populate', async(req, res) => {
    await Word.insertMany(wordsData);
    res.status(201).json({message: "Records Created"});
})

router.get('/clean', async(req, res) => {
    await Word.deleteMany();
    res.status(200).json({message: "Records Deleted"});
})
router.get("/", async(req, res) => {
    const searchText = req.query.search || '';
    try {
        const response = await Word.find({word: {$regex: new RegExp(`${searchText}`, "i")}}, {word: 1}).limit(5).sort()
        const wordsFiltered = response.map(wordJson => wordJson.word);
        res.status(200).json(wordsFiltered);
    } catch (e) {
        console.error("Exception Occurred while fetching the words");
        res.status(500).json({error: true, message: e.getMessage() })
    }
})

router.get("/static", async(req, res) => {
    const searchText = req.query.search || '';

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
    const trie = new Trie();
    for (let word of wordsDB) {
        trie.insert(word.toLowerCase());
    }
    let wordsFiltered = trie.search(searchText.toLowerCase());
    res.status(200).json(wordsFiltered);
})

module.exports = router
