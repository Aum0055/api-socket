const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3100",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:3100",
  })
);
app.use(express.json());

app.get("/api/test", (req, res) => {
  console.log(req.body, "test");
  res.json({ message: "Custom API route" });
});

const customNamespace = io.of(`/api/create-namespace`);

customNamespace.on("connection", (socket) => {
  console.log(`User connected to /api/create-namespace`, socket);
  socket.timeout(3000);
  socket.on("message", (msg) => {
    console.log(`Message from /api/create-namespace:`, msg);
    customNamespace.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected from /api/create-namespace`);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
