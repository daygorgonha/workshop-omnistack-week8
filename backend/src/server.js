const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
   console.log('Nova conexao', socket.id);

   socket.on('hello', message => {
      console.log(message)
   })
});

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.rmdjb.mongodb.net/omnistack8?retryWrites=true&w=majority', {
   useNewUrlParser: true 
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
