const port = 8080;

const io = require("socket.io")(port, {
    cors: {
        origin: "http://localhost:3000",
    }
});
let dataMsg = [];
io.on("connection", socket => {
    socket.on("send", data => {
        dataMsg.push(data)
        io.emit("getListMsg", dataMsg)
    }) 
    socket.on("getData", () => {
        io.emit("getListMsg", dataMsg)
    })  
});