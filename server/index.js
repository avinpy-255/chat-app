const express = require('express');
const socket = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000

const router = require('./router')

const app = express();
const server = http.createServer(app);
const io = socket(server)

app.use(router)

io.on('connection', (socket) => {
    console.log('new connection');

    socket.on('disconnect', () =>{
        console.log('user disconnected')
    })
})

server.listen(() => {
    console.log(`Server is running on port ${PORT}`)
})

