const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Establishing Websockets
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected");
    });

    // Handle chat messages
    socket.on("chat message", (msg) => {
        console.log("Received message:", msg);
        // Emit the message back to all connected clients
        io.emit("chat message", msg);
    });
});

// Start the server
server.listen(4000, () => {
    console.log("Now listening on port 4000");
});
