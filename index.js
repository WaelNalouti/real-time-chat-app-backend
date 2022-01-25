const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("MESSAGE-SENT", (msg) => {
    console.log(msg);
    io.emit("RECIEVE-MSG", msg);
  });
});

http.listen(8000, () => {
  console.log("📌listening on port 8000");
});
