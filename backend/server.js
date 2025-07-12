const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: '*' },
});

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("New client connected: ", socket.id);

  socket.on("send_message", (data) => {
    io.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected: ", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
