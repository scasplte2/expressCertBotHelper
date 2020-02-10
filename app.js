// Dependencies
const express = require('express');

// set the process title so we can stop it
process.title = "ecbHelper"

// Configure & Run the http server
const app = express();

// Check if there are env variables
const challenge = process.env.CERTBOT_TOKEN || "url-string"
const response = process.env.CERTBOT_VALIDATION || "It works!"

// set default port
PORT = process.env.PORT || 80

app.get("/.well-known/acme-challenge/" + challenge, (req, res) => res.send(response));

const server = app.listen(PORT, () => {
  console.log('certbotHelper - HTTP server running on port ' + PORT);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})