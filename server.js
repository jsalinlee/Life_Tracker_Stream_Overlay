var app = require("http").createServer();
var io = require("socket.io")(app);
const ioHook = require("iohook");

app.listen(8000);
ioHook.start();

io.on("connection", function(socket) {
  socket.emit("new_user", { id: socket.id });

  ioHook.on("keydown", (event) => {
    if (event.rawcode === 100) {
      socket.emit("player1Gain1");
    }
    if (event.rawcode === 97) {
      socket.emit("player1Lose1");
    }
    if (event.rawcode === 101) {
      socket.emit("player2Gain1");
    }
    if (event.rawcode === 98) {
      socket.emit("player2Lose1");
    }
    if (event.rawcode === 109) {
      socket.emit("resetGame");
    }
  });
});
