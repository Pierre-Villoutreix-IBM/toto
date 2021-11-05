#!/usr/bin/env node

const http = require('http');
const { readFileSync } = require('fs');

const port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  req.on('end', async () => {
    try {
      res.write(readFileSync('./index.html').toString());
    } catch (err) {
      res.writeHead(500);
      res.write(JSON.stringify(err));
    }
    res.end();
  }).resume();
}).listen(port, () => {
  console.log(`Start toto on port ${port}`);
});