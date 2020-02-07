// Dependencies
const express = require('express');
const config = require('config');

// Configure & Run the http server
const app = express();

// Check if there are env variables
const challenge = config.has("certbot.challenge") ? config.get("certbot.challenge") : "url-string"
const response = config.has("certbot.response") ? config.get("certbot.response") : "It works!"

console.log(challenge)

// set default port
PORT = process.env.PORT || 80

app.get("/.well-known/acme-challenge/" + challenge, (req, res) => res.send(response));

app.listen(PORT, () => {
  console.log('certbotHelper - HTTP server running on port ' + PORT);
});