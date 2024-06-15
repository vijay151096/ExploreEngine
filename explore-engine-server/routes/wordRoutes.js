const express = require('express');
const Trie = require("../searchmodule/Trie");
const router = express.Router();
const client = require('../db/elasticSearch');
const {ES_INDEX, createElasticSearchIndex} = require("../db/elasticSetup");
const wordsSampleData = require('../db/data')
router.get("/populate", async(req, res) => {

    await createElasticSearchIndex().catch( (e)=> console.log("error occurred in elastic  search connectivity" + e) );
    const body = wordsSampleData.flatMap(doc => [
        { index: { _index: ES_INDEX } },
        doc
    ]);

    let bulkResponse ;
    try {
        bulkResponse = await client.bulk({ refresh: true, body });
        console.log(`Successfully indexed documents`);
    } catch (err) {
        console.error(`Error bulk indexing data to Elasticsearch: ${err}`);
        res.status(500).send(`Error bulk indexing data to Elasticsearch: ${err}`);
    }
    res.status(200).json(bulkResponse);
})

router.get("/clean", async(req, res) => {
    try {
        const result = await client.indices.delete({
            index: ES_INDEX
        });
        res.status(200).json(result);
    } catch (err) {
        console.error(`Error Clearing Index: ${err}`);
        res.status(500).send(`Error Clearing Index: ${err}`);
    }
})

router.get("/", async(req, res) => {
    const searchText = req.query.search || '';
    let result;
    try {
        result = await client.search({
            index: ES_INDEX,
            body: {
                size: 5,
                _source: ["word"],
                query: {
                    regexp: {
                        word: {
                            value: `.*${searchText}.*`
                        }
                    }
                }
            }
        });
    } catch (e) {
        console.error(`Error Fetching the Response: ${e}`);
        res.status(500).send(`Error Fetching the Response: ${e}`);
    }
    const wordsResponse = result?.hits.hits.map(obj => obj._source.word)
    res.status(200).json(wordsResponse);
})

router.get("/trie", async(req, res) => {
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
