const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: 'http://elasticsearch:9200',
    auth: {
        username: 'elastic',
        password: '1234'
    }
});

module.exports = client;
