const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);

server.listen(3006, () => {
  console.log('listening on *:3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..","public", "index.html"));
  });