// Dependencies
const express = require('express');
const config = require('config');

// Configure & Run the http server
const app = express();

console.log(process.env.NODE_ENV)
console.log(process.env.PORT)
console.log(process.env.NODE_APP_INSTANCE)

// set default port
PORT = process.env.PORT || 80

app.get("/.well-known/acme-challenge/" + config.get("challenge"),
        (req, res) => res.send(config.get("response")));

app.listen(PORT, () => {
  console.log('certbotHelper - HTTP server running on port ' + PORT);
});