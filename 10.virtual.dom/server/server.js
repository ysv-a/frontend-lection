const express = require('express');

const server = express()
 .use((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    res.setTimeout(3000, () => {
        res.sendFile('/articles.json', { root: __dirname })
    });

 })
 .listen(3000, () => console.log(`Listening on ${3000}`));
