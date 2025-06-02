const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('beginPath', (path) => {
        socket.broadcast.emit('beginPath', path);
    });

    socket.on('drawLine', (path) => {
        socket.broadcast.emit('drawLine', path);
    });

    socket.on('changeConfig', (config) => {
        socket.broadcast.emit('changeConfig', config);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 