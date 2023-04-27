// First install the dependencies:
// npm install pusher express body-parser cors

/*const WebSocket = require('ws');
const socket = new WebSocket('wss://ntfy.sh/luna/ws');
socket.addEventListener('message', function (event) {
    console.log(event.data + "tese=te");
})*/

const express = require('express');
const WebSocket = require('ws');
let msg;

const app = express();
const server = app.listen(3000, () => {
  console.log('Listening on port 3000');
});

const socket = new WebSocket('wss://ntfy.sh/luna/ws');
socket.addEventListener('message', (event) => {
    msg = event.data;
  console.log(event.data);
});

app.get('/teste', (req, res) => {
  res.send('WebSocket connection established' + msg);
  console.log("Fizeram um get agorinha")
});
