const port = 8080;

const io = require("socket.io")(port, {
    cors: {
        origin: "http://localhost:3000",
    }
});

io.on("connection", socket => {
    socket.on("start", () => {
        console.log(1)
    })   
});