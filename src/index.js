const express = require("express");
const { join } = require("node:path");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const port = 8080;

const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  // res.sendFile(join(__dirname, "index.html"));
  res.json({ test: null });
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

server.listen(port, () => {
  console.log("server running at http://localhost:" + port);
});

// app.listen(port, () => console.log(`server is up on port ${port}`));
