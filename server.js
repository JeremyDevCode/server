import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "https://tic-tac-toe-jeremydevcode.vercel.app",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("play", (index) => {
    socket.broadcast.emit("play", index);
  });
});

const port = process.env.PORT || 8000;

httpServer.listen(port);
