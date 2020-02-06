// Dependencies
const express = require('express');
const config = require('config');

// Configure & Run the http server
const app = express();

app.get("/.well-known/acme-challenge/" + config.get("challenge"),
        (req, res) => res.send(config.get("response")));

app.listen(80, () => {
  console.log('HTTP server running on port 80');
});