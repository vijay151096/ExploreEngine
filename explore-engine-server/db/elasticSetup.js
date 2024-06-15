const client = require('./elasticSearch');

const ES_INDEX = 'word-index';
async function createElasticSearchIndex() {
    await client.indices.create({
        index: ES_INDEX,
        body: {
            mappings: {
                properties: {
                    word: { type: 'text' },
                    type: { type: 'text' }
                }
            }
        }
    }, { ignore: [400] });

    await client.indices.refresh({ index:  ES_INDEX});
    console.log('Index created successfully');
}

module.exports = {createElasticSearchIndex, ES_INDEX};
